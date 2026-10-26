import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, X, ArrowLeftRight } from "lucide-react";
import {
  compareTeams,
  comparisonOptions,
  comparisonCityList,
  type ComparisonCitySort,
} from "@/lib/team-comparison";
import { useGlobeStore } from "@/store/globe-store";

export function ComparisonPanel({ teams }: { teams: [string, string] }) {
  const s = useGlobeStore();
  const [commonOnly, setCommonOnly] = useState(false);
  const [sort, setSort] = useState<ComparisonCitySort>("total");
  const scrollRef = useRef<HTMLDivElement>(null);
  const detailHeading = useRef<HTMLHeadingElement>(null);
  const result = compareTeams(teams, s.sTierYear);
  const selected = result.cities.find(
    (city) => s.selectedMarker?.kind === "stier" && city.id === s.selectedMarker.id,
  );
  const cities = comparisonCityList(result.cities, commonOnly, sort, s.markerClusterIds);
  const clusterKey = s.markerClusterIds.join(",");
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [selected?.id, commonOnly, sort, teams[0], teams[1], s.sTierYear, clusterKey]);
  useEffect(() => {
    if (selected) detailHeading.current?.focus({ preventScroll: true });
  }, [selected?.id]);
  const backToList = () => {
    s.clearSelection();
    s.setMobileDetailsExpanded(true);
  };
  return (
    <aside
      className="selection-panel comparison-panel pointer-events-auto"
      data-expanded={s.mobileDetailsExpanded}
      data-city-detail={Boolean(selected)}
      aria-label="双队夺冠版图对比"
    >
      <div className="sheet-heading">
        <button
          type="button"
          className="flex min-h-14 flex-1 items-center justify-between gap-3 text-left"
          onClick={() => s.setMobileDetailsExpanded(!s.mobileDetailsExpanded)}
          aria-expanded={s.mobileDetailsExpanded}
          aria-label="展开或收起双队对比"
        >
          <span>
            <strong className="block text-sm">双队夺冠版图</strong>
            <span className="text-[11px] text-fg-muted">
              {result.sides[0].title} × {result.sides[1].title}
            </span>
          </span>
          {s.mobileDetailsExpanded ? (
            <ChevronDown className="size-4 sm:hidden" />
          ) : (
            <ChevronUp className="size-4 sm:hidden" />
          )}
        </button>
        <button
          type="button"
          className="comparison-icon"
          onClick={() => s.setComparisonTeams(null)}
          aria-label="退出双队对比"
        >
          <X className="size-4" />
        </button>
      </div>
      <div className="selection-content comparison-content">
        <div className="comparison-overview">
          <div className="comparison-teams">
            {result.sides.map((side, index) => (
              <div key={index} className={`comparison-side side-${index}`}>
                <label className="block text-[11px]">
                  队伍 {index === 0 ? "A · 金色" : "B · 青色"}
                  <select
                    aria-label={`对比队伍 ${index === 0 ? "A" : "B"}`}
                    value={teams[index]}
                    onChange={(event) => {
                      const next: [string, string] = [...teams];
                      next[index] = event.target.value;
                      s.setComparisonTeams(next);
                    }}
                  >
                    {comparisonOptions.map((option) => (
                      <option
                        key={option.key}
                        value={option.key}
                        disabled={option.key === teams[1 - index]}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
                <p className="comparison-wins">
                  <strong className="font-mono text-2xl">{side.events.length}</strong>
                  <span className="ml-1 text-xs">冠</span>
                </p>
                <p className="text-[11px] text-fg-muted">
                  {side.majorCount} Major · {side.cityCount} 城
                </p>
              </div>
            ))}
          </div>
          <div className="comparison-summary-row flex items-center justify-between gap-2 text-[11px] text-fg-muted">
            <span>
              截至 {s.sTierYear} 年 · 共同{" "}
              {result.cities.filter((city) => city.membership === "both").length} 城
            </span>
            <button
              type="button"
              className="comparison-swap"
              onClick={() => s.setComparisonTeams([teams[1], teams[0]])}
            >
              <ArrowLeftRight className="size-3" />
              交换
            </button>
          </div>
        </div>
        {selected ? (
          <div className="comparison-detail-header">
            <button type="button" className="comparison-back" onClick={backToList}>
              ← 返回城市列表
            </button>
            <h3 ref={detailHeading} tabIndex={-1} className="text-sm font-medium">
              {selected.cityZh} · 夺冠记录
            </h3>
            <p className="mt-1 text-[11px] text-fg-muted">
              截至 {s.sTierYear} 年 ·{" "}
              <span className="side-0">
                {result.sides[0].title} {selected.events[0].length} 冠
              </span>{" "}
              /{" "}
              <span className="side-1">
                {result.sides[1].title} {selected.events[1].length} 冠
              </span>
            </p>
          </div>
        ) : (
          <div className="comparison-list-controls">
            {s.markerClusterIds.length ? (
              <button type="button" className="comparison-back" onClick={backToList}>
                ← 全部城市 · 当前查看附近 {s.markerClusterIds.length} 城
              </button>
            ) : null}
            <div className="comparison-filter-row">
              <label className="comparison-common">
                <input
                  type="checkbox"
                  checked={commonOnly}
                  onChange={(event) => {
                    setCommonOnly(event.target.checked);
                    s.setTimelinePlaying(false);
                  }}
                />
                只看共同城市
              </label>
              <select
                aria-label="城市排序"
                value={sort}
                onChange={(event) => {
                  setSort(event.target.value as ComparisonCitySort);
                  s.setTimelinePlaying(false);
                }}
              >
                <option value="total">按两队总冠军数</option>
                <option value="a">按 A 队冠军数</option>
                <option value="b">按 B 队冠军数</option>
                <option value="latest">按最近夺冠时间</option>
              </select>
            </div>
            <p className="comparison-list-caption" aria-live="polite">
              列表 {cities.length} 城 · 双色为共同城市 · 筛选不影响地图及总计
            </p>
          </div>
        )}
        <div
          className="comparison-scroll"
          ref={scrollRef}
          key={selected ? "detail" : "list"}
          tabIndex={0}
          role="region"
          aria-label={selected ? "城市夺冠记录滚动区" : "对比城市列表滚动区"}
        >
          {selected ? (
            <section aria-label={`${selected.cityZh}两队夺冠赛事`}>
              <div className="comparison-events">
                {selected.events.map((events, index) => (
                  <div key={index} className={`side-${index}`}>
                    <h4 className="mb-2 text-xs">
                      {result.sides[index].title} · {events.length} 冠
                    </h4>
                    {events.length ? (
                      events.map((row) => (
                        <article key={row.id} className="comparison-event">
                          <p className="font-mono text-[10px] text-fg-muted">
                            {row.event.year}.{String(row.event.month).padStart(2, "0")} ·{" "}
                            {row.event.tier}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-fg">{row.event.name}</p>
                        </article>
                      ))
                    ) : (
                      <p className="text-xs text-fg-subtle">此时尚无夺冠记录</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ) : cities.length ? (
            <ul aria-label="两队夺冠城市">
              {cities.map((city) => (
                <li key={city.id}>
                  <button
                    type="button"
                    className="comparison-city"
                    onClick={() => {
                      s.selectMarker({ kind: "stier", id: city.id });
                      s.setMobileDetailsExpanded(true);
                      s.requestFlyTo(city.lat, city.lng, 1.62);
                    }}
                  >
                    <span className={`comparison-dot membership-${city.membership}`} aria-hidden />
                    <span className="flex-1 text-left">{city.cityZh}</span>
                    <span className="side-0">{city.events[0].length}</span>
                    <span className="text-fg-subtle">:</span>
                    <span className="side-1">{city.events[1].length}</span>
                    <span className="text-fg-subtle">›</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="comparison-empty">
              <p className="text-sm text-fg-muted">
                {commonOnly && result.cities.length
                  ? "当前范围内还没有共同夺冠城市"
                  : "这一年，两队的夺冠版图尚未展开"}
              </p>
              {commonOnly && result.cities.length ? (
                <button
                  type="button"
                  className="min-h-11 text-xs text-marker-major"
                  onClick={() => setCommonOnly(false)}
                >
                  查看全部城市
                </button>
              ) : (
                <button
                  type="button"
                  className="min-h-11 text-xs text-marker-major"
                  onClick={() => s.setTimelinePlaying(true)}
                >
                  播放后续年份 →
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
