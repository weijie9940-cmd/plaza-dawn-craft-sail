# ORBITAL 寰宇

交互式 3D 地球仪，叠了电竞赛事图层（CS2 Major、S 级赛事城市）。技术栈是 Vite、React、React Three Fiber、TanStack Start/Router。

An interactive 3D Earth with esports overlays (CS2 Majors and S-tier event cities). Vite, React, React Three Fiber, and TanStack Start/Router.

## 本地运行 / Local dev

```bash
npm install
npm run dev
```

开发服务器监听 `8080`。常用脚本：

| Script | 作用 |
| --- | --- |
| `npm run dev` | 本地开发 |
| `npm run build` | 生产构建（Vercel / Nitro；没有 `DATABASE_URL` 时会跳过数据库迁移） |
| `npm run build:edgeone` | EdgeOne Pages 静态构建，输出 `dist/client`，不跑数据库迁移 |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |

`npm run dev` 经 `scripts/with-app-env.mjs` 启动 Vite。Windows 上不要改回直接 `spawn("vite")`，否则 `.cmd` shim 会启动失败。

## 源码地图 / Where the code lives

业务代码：

| 路径 | 内容 |
| --- | --- |
| `src/features/globe/` | 3D 地球：场景、昼夜着色、国家图层、赛事标记、交互 |
| `src/features/hud/` | 叠加界面：搜索、年份、国家卡、侧栏、自定义标记 |
| `src/features/app/App.tsx` | 把地球和 HUD 组装成页面 |
| `src/data/` | 国家、CS2 Major、S 级赛事数据 |
| `src/store/globe-store.ts` | 地球与 HUD 共用的 Zustand 状态 |
| `src/lib/geo.ts`、`src/lib/sun.ts`、`src/lib/storage.ts` | 经纬度、太阳方向、本地存档 |
| `src/routes/` | TanStack 路由入口 |

仍留在原处的平台代码（下一阶段再拆，这次没动依赖）：

| 路径 | 内容 |
| --- | --- |
| `src/lib/auth/`、`src/lib/db.ts`、`migrations/` | 登录与数据库 |
| `src/lib/app-data/` | 连接器数据 |
| `src/lib/multiplayer/` | P2P |
| `src/lib/og/` | 分享卡片配置 |
| `src/components/ui/` | 共用按钮、输入框、对话框 |
| `src/components/preview-host-bridge.tsx` | 预览宿主桥 |
| `public/__grok/`、`scripts/grok-pwa-*`、`server/middleware/grok-pwa.ts` | PWA 安装页，仍接在 Vite 上 |

`.grok/app-env.json` 里的 `VITE_AUTH_ENABLED` 是 `false`。删掉这个文件会让开发构建按默认把登录打开。`.grok/skills/og/` 留着，是因为现有的品牌检查测试会读这些文档。

## 和 grok.me 的关系

这个 GitHub 仓库**不会**自动同步到已发布的 grok.me 应用。在这里改代码、推送、合并，都不会更新线上的 grok.me 站点，除非你自己再部署一次。
