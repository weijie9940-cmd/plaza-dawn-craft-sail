# ORBITAL 数据更新接入说明

## 当前状态

已实现更新框架和消费链路。PandaScore 免费层的只读候选赛事检查器已通过真实连接验证；页面继续使用原始档案，不声称已获取最新赛果。没有修改历史阵容、MVP、图片或历史排名资料。

新增赛事会同步影响地图城市、搜索、年份上限、Major 总计、队伍历程和双队对比。HLTV 新版排名进入排名面板。Major 专用图层也会读取新增 Major；新城市尚无国家标签时明确显示资料待补充。

## 数据流与发布

授权数据源 → 服务端适配器生成下述 JSON → `npm run data:sync` → 校验、去重、冲突检查 → `src/data/sync/current.json` → 构建发布 → 页面展示。

当前快照是增量，内置资料保留。每次成功写入前，旧版与新版都按内容哈希写入 `src/data/sync/history/`，然后原子替换 current.json。输入失败、网络失败、超时或任何验证错误均不替换当前文件。单次赛事批次最多 500 条，累计档案无此上限。独占锁阻止并发覆盖；进程被强制终止后如遗留 current.json.lock，确认没有发布进程运行后才可人工删除锁。构建额外运行 `data:validate`，避免错误数据发布。生产环境不写运行时文件、不依赖本机磁盘或浏览器定时器。

此阶段没有运行中的远程数据库。接入后通过仓库更新和站点重新部署发布数据，已打开的页面需刷新以读取新版本；这不是秒级直播流。发布失败时线上仍保留旧版，页面展示旧的成功时间，CI 负责报告失败。

## 配置

在运行环境 / GitHub 仓库设置中配置以下名称，不要把密钥写入代码、前端 `VITE_` 变量或聊天。项目不创建 `.env` 文件。

| 名称 | 用途 |
| --- | --- |
| ORBITAL_EVENTS_FEED_URL | 输出本项目 events JSON 的 HTTPS 地址 |
| PANDASCORE_API_TOKEN | PandaScore 候选赛事审核任务的 Actions secret |
| ORBITAL_EVENTS_FEED_TOKEN | 可选服务端 Bearer token |
| ORBITAL_RANKINGS_FEED_URL | 输出本项目 rankings JSON 的 HTTPS 地址 |
| ORBITAL_RANKINGS_FEED_TOKEN | 可选服务端 Bearer token |
| ORBITAL_SYNC_ENABLED | 默认为关闭，设为 true 才运行工作流 |
| ORBITAL_SYNC_PUBLISH | 默认为关闭，设为 true 才允许验证通过后提交仓库 |

地址不允许用户名、密码、查询参数或片段；认证单独传入。只接受 JSON，最多 5 MB，超时 20 秒，拒绝重定向。错误日志不会输出原始响应、地址或密钥。

PandaScore 原始接口响应不能直接填入这里：需要先写提供商适配器，核实比赛覆盖、赛事最终冠军、赛事等级、线下举办城市及授权范围。普通比赛获胜者不等于赛事冠军。HLTV 排名必须来自可合法使用的 HLTV 来源，其他提供商自己的排名不能冒充 HLTV。历史阵容必须按赛事保存，不能被现役阵容替换。

### PandaScore 免费层的第一步

已提供 `npm run data:pandascore:review`。它从服务端环境变量 `PANDASCORE_API_TOKEN` 读取密钥，也支持一次性 `--stdin` 输入，以 Bearer 请求一页最近的 Counter-Strike S-tier 已结束赛事，最多 20 条；生成本地忽略提交的 `screenshots/pandascore-review.json`。报告列出赛段、所属联赛与系列赛、赛段胜者、结束时间及需要人工核对的字段，**不会**写入正式快照，也不会把赛段胜者当作整场赛事冠军。密钥不要放进 `VITE_` 变量、Git 或 URL。

2026-10-26 的真实响应验证了认证与 20 条候选数据。首批候选包含 “Group A” 和 “Playoffs” 等赛段；最晚的结束时间为 2026-08-23。仅凭这一页不能推断近期赛事覆盖完整，也不能直接生成地图上的冠军城市记录。

工作流支持手动 `pandascore-review` 与每 6 小时自动检查：密钥保存在仓库 Actions 的 `PANDASCORE_API_TOKEN` secret，生成仅供下载核对的报告 artifact；这些检查不提交仓库快照，也不需要开启自动发布。工作流目前只存在于本地工作区，推送前无法在 GitHub 运行。


接入正式发布前，应抽查报告中的赛事，确认最终冠军、Major 或 S 的项目口径、线下举办城市、场馆与公开可引用的来源链接；再构造上文标准化 events feed。PandaScore 的 `tier=s` 不能自动等同于本项目的 Major，API 详情地址也不等同于可供访客打开的公开来源链接。排名仍需独立来源与授权。

## events 数据格式

顶层：`schemaVersion: 1`、`kind: "events"`、`asOf`（UTC ISO 时间）、`sourceName`、`records` 数组。

每条 records 包含：

- `sourceId`：提供商前缀 + 稳定赛事 ID。
- `sourceUrl`：公开 HTTPS 来源链接，不含密钥或查询参数。
- `completed: true` 与 `resultType: "tournament_champion"`，必须来自赛事最终结果。
- `endedAt`：UTC ISO 结束时间，与 event.year/month 一致，不能晚于 asOf。
- `city`：`id, city, cityZh, lat, lng`。城市名与 event 对应，已知城市 ID 与坐标必须一致；新城市必须提供已核实坐标。
- `event`：`year, month, name, cityZh, cityEn, venue, champion, tier, note`。tier 仅 Major/S；venue、note 可为 null。

严格字段定义位于 `src/lib/data-sync.ts`。多阶段、线上赛事和跨城市赛事需由适配器人工明确映射规则；无法确认的记录不入库。马耳他等已有城市聚合别名应遵循现有目录，并规范化展示名称。

同一赛事标识（年月+名称）或 sourceId 不允许冲突。已存在冠军、场馆等字段发生变化时，整批拒绝，需人工核实并单独修订。同步不执行删除；来源漏掉旧记录不会清空档案。

## rankings 数据格式

顶层：`schemaVersion: 1`、`kind: "rankings"`、`asOf`、`sourceName: "HLTV"`、`ranking`。

ranking 沿用 `src/data/world-ranking.ts` 的结构：`rankingDate, pageTitle, sourceUrl, teams`。至少 20 队，连续有序名次、唯一 teamKey，所有链接为公开 HTTPS。team 的 roster、coach、honours 等字段按完整类型提供，可使用真实空值，不能捏造。排名日期必须晚于内置榜单，后续不能回退；同一期内容不可自动修改。全部接收的版本保留在快照中。

## 命令与验收

- `npm run data:sync -- events` / `rankings` / `all`：读取配置的标准化数据源。all 在两个来源都读取并校验通过后才写入。
- `npm run data:validate`：验证已生成快照与基础档案的一致性。
- `npm run test:data`：合并、错误拒绝、历史保留与文件原子性测试，使用隔离临时文件，不写生产快照。
- 没有任何配置时返回 not-configured，不改文件、不更新时间。

`.github/workflows/data-sync.yml` 预设赛事每 6 小时、排名每日检查，执行时间由 GitHub 调度，可能延迟。默认关闭。先以仅生成 artifact 模式对接真实数据并核对样本，再决定是否开启仓库发布。启用发布前须确认仓库写入策略、分支保护和站点对该分支的部署关联。工作流仅准备在本地，尚未推送或启用。

回滚：将已验证的 history 快照恢复为 current.json，运行验证和构建，再按既有发布流程部署。不要用回退来源时间绕过输入检查。后续接入重点是提供商适配、授权与覆盖验收，而不是继续加前端刷新按钮。
