import { X } from "lucide-react";
import { COUNTRY_BY_ISO, COUNTRY_COUNT } from "@/data/countries";
import { CS2_MAJORS } from "@/data/cs2-majors";
import { citiesUpToYear } from "@/data/s-tier-events";
import { useGlobeStore } from "@/store/globe-store";
import { Button } from "@/components/ui/button";
import { MvpPhotos } from "./MvpPhotos";

export function SidePanel() {
  const open = useGlobeStore((s) => s.panelOpen);
  const setPanelOpen = useGlobeStore((s) => s.setPanelOpen);
  const visited = useGlobeStore((s) => s.visited);
  const customMarkers = useGlobeStore((s) => s.customMarkers);
  const selectCountry = useGlobeStore((s) => s.selectCountry);
  const selectMarker = useGlobeStore((s) => s.selectMarker);
  const requestFlyTo = useGlobeStore((s) => s.requestFlyTo);
  const removeMarker = useGlobeStore((s) => s.removeMarker);
  const toggleVisited = useGlobeStore((s) => s.toggleVisited);
  const showSTier = useGlobeStore((s) => s.showSTier);
  const sTierYear = useGlobeStore((s) => s.sTierYear);

  if (!open) return null;

  const visitedCountries = visited
    .map((iso) => COUNTRY_BY_ISO.get(iso))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const stierCities = citiesUpToYear(sTierYear);

  return (
    <aside className="panel-enter pointer-events-auto flex max-h-[min(70vh,32rem)] w-full max-w-sm flex-col rounded-xl bg-surface shadow-[var(--shadow-border)]">
      <header className="flex items-center justify-between px-4 pt-4 pb-2">
        <h2 className="font-display text-base font-medium tracking-tight">足迹</h2>
        <Button size="icon-sm" variant="ghost" onClick={() => setPanelOpen(false)} aria-label="关闭列表">
          <X className="size-4" />
        </Button>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-3">
        <section className="px-2">
          <h3 className="mb-1.5 text-xs font-medium tracking-wide text-fg-muted">
            已点亮 {visited.length}/{COUNTRY_COUNT}
          </h3>
          {visitedCountries.length === 0 ? (
            <p className="px-1 py-2 text-sm text-fg-subtle">点击国家卡片上的「点亮打卡」</p>
          ) : (
            <ul>
              {visitedCountries.map((c) => (
                <li key={c.iso} className="flex items-center gap-1">
                  <button
                    type="button"
                    className="flex min-w-0 flex-1 items-baseline justify-between gap-2 rounded-md px-2 py-2 text-left hover:bg-surface-2"
                    onClick={() => {
                      selectCountry(c.iso);
                      requestFlyTo(c.lat, c.lng, 1.82);
                      setPanelOpen(false);
                    }}
                  >
                    <span className="truncate text-sm text-fg">{c.nameZh}</span>
                    <span className="truncate text-xs text-fg-muted">{c.capitalZh || c.capital}</span>
                  </button>
                  <button
                    type="button"
                    className="size-9 shrink-0 rounded-md text-xs text-fg-muted hover:bg-surface-2 hover:text-fg"
                    onClick={() => toggleVisited(c.iso)}
                  >
                    取消
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className="mt-3 px-2">
          <h3 className="mb-1.5 text-xs font-medium tracking-wide text-fg-muted">我的标记</h3>
          {customMarkers.length === 0 ? (
            <p className="px-1 py-2 text-sm text-fg-subtle">打开「放置标记」后点击地球任意位置</p>
          ) : (
            <ul>
              {customMarkers.map((m) => (
                <li key={m.id} className="flex items-center gap-1">
                  <button
                    type="button"
                    className="flex min-w-0 flex-1 items-baseline justify-between gap-2 rounded-md px-2 py-2 text-left hover:bg-surface-2"
                    onClick={() => {
                      selectMarker({ kind: "custom", id: m.id });
                      requestFlyTo(m.lat, m.lng, 1.62);
                      setPanelOpen(false);
                    }}
                  >
                    <span className="truncate text-sm text-fg">{m.name}</span>
                  </button>
                  <button
                    type="button"
                    className="size-9 shrink-0 rounded-md text-xs text-fg-muted hover:bg-surface-2 hover:text-fg"
                    onClick={() => removeMarker(m.id)}
                  >
                    删除
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
        {showSTier ? (
          <section className="mt-3 px-2">
            <h3 className="mb-1.5 text-xs font-medium tracking-wide text-fg-muted">
              S 级赛事城市 {stierCities.length}
            </h3>
            <ul>
              {stierCities.map((m) => (
                <li key={m.id}>
                  <button
                    type="button"
                    className="flex w-full items-baseline justify-between gap-2 rounded-md px-2 py-2 text-left hover:bg-surface-2"
                    onClick={() => {
                      selectMarker({ kind: "stier", id: m.id });
                      requestFlyTo(m.lat, m.lng, 1.62);
                      setPanelOpen(false);
                    }}
                  >
                    <span className="text-sm text-fg">
                      {m.cityZh}
                      {m.holy ? <span className="ml-1.5 text-xs text-marker-major">圣地</span> : null}
                    </span>
                    <span className="font-mono text-xs tabular-nums text-fg-muted">{m.events.length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <MvpPhotos />
        <section className="mt-3 px-2">
          <h3 className="mb-1.5 text-xs font-medium tracking-wide text-fg-muted">CS Major 城市</h3>
          <ul>
            {CS2_MAJORS.map((m) => (
              <li key={m.id}>
                <button
                  type="button"
                  className="flex w-full items-baseline justify-between gap-2 rounded-md px-2 py-2 text-left hover:bg-surface-2"
                  onClick={() => {
                    selectMarker({ kind: "cs2", id: m.id });
                    requestFlyTo(m.lat, m.lng, 1.62);
                    setPanelOpen(false);
                  }}
                >
                  <span className="text-sm text-fg">{m.cityZh}</span>
                  <span className="text-xs text-fg-muted">{m.events.map((e) => e.year).join(" / ")}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}
