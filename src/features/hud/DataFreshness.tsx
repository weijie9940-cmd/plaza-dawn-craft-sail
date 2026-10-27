import { DATA_SNAPSHOT } from "@/data/sync/snapshot";
import { WORLD_RANKING } from "@/data/world-ranking";
import { useGlobeStore } from "@/store/globe-store";

export function DataFreshness() {
  const { eventSync, rankingSync } = DATA_SNAPSHOT;
  const stamp = (value: string) => `${value.slice(0, 10)} ${value.slice(11, 16)} UTC`;
  return (
    <details
      className="data-freshness pointer-events-auto"
      onToggle={(event) => {
        if (event.currentTarget.open) useGlobeStore.getState().setTimelinePlaying(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.currentTarget.open = false;
          event.preventDefault();
          event.stopPropagation();
        }
      }}
    >
      <summary>
        数据状态
        <span className="ml-1 text-fg-subtle">
          {eventSync || rankingSync ? "· 快照" : "· 内置"}
        </span>
      </summary>
      <div className="data-freshness-card">
        <h2 className="text-sm font-medium text-fg">数据来源与更新时间</h2>
        <section className="mt-3">
          <h3 className="text-xs text-marker-major">赛事档案</h3>
          <p className="mt-1 text-xs leading-relaxed">
            {eventSync ? `增量来源：${eventSync.sourceName}` : "HLTV.org · 内置档案整理于 2026-09"}
          </p>
          <p className="mt-1 text-[11px] text-fg-muted">
            {eventSync ? `最后成功同步：${stamp(eventSync.lastSuccess)}` : "自动更新尚未接入"}
          </p>
          {eventSync ? (
            <p className="mt-1 text-[11px] text-fg-muted">
              来源截至：{stamp(eventSync.sourceAsOf)}
            </p>
          ) : null}
        </section>
        <section className="mt-3">
          <h3 className="text-xs text-marker-major">HLTV 世界排名</h3>
          <p className="mt-1 text-xs">当前榜单：{WORLD_RANKING.rankingDate}</p>
          <p className="mt-1 text-[11px] text-fg-muted">
            {rankingSync
              ? `最后成功同步：${stamp(rankingSync.lastSuccess)}`
              : "使用内置快照 · 自动更新尚未接入"}
          </p>
        </section>
        <p className="mt-3 border-t border-white/10 pt-3 text-[11px] leading-relaxed text-fg-muted">
          {eventSync || rankingSync
            ? "当前展示此版本已校验的数据快照，不是实时比分。"
            : "当前版本使用内置资料。刷新页面不会自动补充最新赛果。"}{" "}
          历史阵容和 MVP 保留赛事当时的资料。
        </p>
      </div>
    </details>
  );
}
