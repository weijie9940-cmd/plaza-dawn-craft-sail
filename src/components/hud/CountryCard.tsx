import { MapPin, Check, Navigation } from "lucide-react";
import { COUNTRY_BY_ISO } from "@/data/countries";
import { CS2_MAJORS } from "@/data/cs2-majors";
import {
  CHAMPION_LABEL,
  championKey,
  citiesUpToYear,
} from "@/data/s-tier-events";
import { formatCoord } from "@/lib/geo";
import { useGlobeStore } from "@/store/globe-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CountryCard() {
  const selectedIso = useGlobeStore((s) => s.selectedIso);
  const selectedMarker = useGlobeStore((s) => s.selectedMarker);
  const visited = useGlobeStore((s) => s.visited);
  const customMarkers = useGlobeStore((s) => s.customMarkers);
  const toggleVisited = useGlobeStore((s) => s.toggleVisited);
  const removeMarker = useGlobeStore((s) => s.removeMarker);
  const requestFlyTo = useGlobeStore((s) => s.requestFlyTo);
  const clearSelection = useGlobeStore((s) => s.clearSelection);
  const sTierYear = useGlobeStore((s) => s.sTierYear);
  const highlightedTeam = useGlobeStore((s) => s.highlightedTeam);
  const setHighlightedTeam = useGlobeStore((s) => s.setHighlightedTeam);

  if (selectedMarker?.kind === "stier") {
    const city = citiesUpToYear(sTierYear).find((m) => m.id === selectedMarker.id);
    if (!city) return null;
    const majorCount = city.events.filter((e) => e.tier === "Major").length;
    return (
      <article className="card-enter pointer-events-auto w-full max-w-sm rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium tracking-wide text-marker-major uppercase">
          {majorCount > 0 ? "Major · S 级赛事" : "S 级赛事"}
          {city.holy ? " · 电竞圣地" : ""}
        </p>
        <h2 className="mt-1 font-display text-xl font-medium tracking-tight text-fg">
          {city.cityZh}
          <span className="ml-2 text-sm font-normal text-fg-muted">{city.city}</span>
        </h2>
        <p className="mt-1 text-sm text-fg-muted">
          {city.events.length} 场 · {formatCoord(city.lat, city.lng)}
        </p>
        <ul className="mt-3 max-h-56 space-y-2 overflow-y-auto pr-1">
          {city.events.map((ev) => {
            const key = championKey(ev.champion);
            const active = highlightedTeam === key;
            return (
              <li key={`${ev.year}-${ev.month}-${ev.name}`} className="text-sm leading-snug">
                <p className="text-fg">
                  <span className="font-mono tabular-nums text-fg-muted">
                    {ev.year}年{ev.month}月
                  </span>
                  <span className="text-fg-subtle"> —— </span>
                  <button
                    type="button"
                    className={cn(
                      "rounded-sm px-0.5 font-medium underline-offset-2 hover:underline",
                      active ? "text-marker-major" : "text-fg",
                    )}
                    onClick={() => setHighlightedTeam(active ? null : key)}
                    title="高亮该战队所有夺冠城市"
                  >
                    {ev.champion}
                  </button>
                  <span className="text-fg-subtle"> —— </span>
                  <span className="text-fg-muted">{ev.name}</span>
                </p>
                <p className="mt-0.5 text-xs text-fg-subtle">
                  {ev.tier === "Major" ? "Major" : "S 级"}
                  {" · "}
                  {ev.venue ?? "场馆待考"}
                  {ev.cityEn !== city.city ? ` · ${ev.cityZh}` : ""}
                </p>
                {ev.note?.includes("级别边缘") ? (
                  <p className="text-xs text-fg-subtle">级别边缘</p>
                ) : null}
              </li>
            );
          })}
        </ul>
        {highlightedTeam ? (
          <p className="mt-3 text-xs text-fg-muted">
            正在查看 {CHAMPION_LABEL[highlightedTeam] ?? highlightedTeam} 王朝
            <button
              type="button"
              className="ml-2 text-fg underline-offset-2 hover:underline"
              onClick={() => setHighlightedTeam(null)}
            >
              清除
            </button>
          </p>
        ) : (
          <p className="mt-3 text-xs text-fg-subtle">点击战队名，查看其夺冠版图</p>
        )}
        <div className="mt-4 flex gap-2">
          <Button size="sm" variant="secondary" onClick={() => requestFlyTo(city.lat, city.lng, 1.62)}>
            <Navigation className="size-3.5" />
            定位
          </Button>
          <Button size="sm" variant="ghost" onClick={clearSelection}>
            关闭
          </Button>
        </div>
      </article>
    );
  }

  if (selectedMarker?.kind === "cs2") {
    const city = CS2_MAJORS.find((m) => m.id === selectedMarker.id);
    if (!city) return null;
    return (
      <article className="card-enter pointer-events-auto w-full max-w-sm rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">CS Major</p>
        <h2 className="mt-1 font-display text-xl font-medium tracking-tight text-fg">
          {city.cityZh}
          <span className="ml-2 text-sm font-normal text-fg-muted">{city.city}</span>
        </h2>
        <p className="mt-1 text-sm text-fg-muted">
          {city.countryZh} · {formatCoord(city.lat, city.lng)}
        </p>
        <ul className="mt-3 space-y-1.5">
          {city.events.map((ev) => (
            <li key={`${ev.year}-${ev.name}`} className="flex justify-between gap-3 text-sm">
              <span className="text-fg">
                {ev.year} {ev.name}
              </span>
              <span className="shrink-0 text-fg-muted">{ev.winner}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-2">
          <Button size="sm" variant="secondary" onClick={() => requestFlyTo(city.lat, city.lng, 1.62)}>
            <Navigation className="size-3.5" />
            定位
          </Button>
          <Button size="sm" variant="ghost" onClick={clearSelection}>
            关闭
          </Button>
        </div>
      </article>
    );
  }

  if (selectedMarker?.kind === "custom") {
    const marker = customMarkers.find((m) => m.id === selectedMarker.id);
    if (!marker) return null;
    return (
      <article className="card-enter pointer-events-auto w-full max-w-sm rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium tracking-wide text-fg-muted uppercase">我的标记</p>
        <h2 className="mt-1 font-display text-xl font-medium tracking-tight text-fg">{marker.name}</h2>
        <p className="mt-1 font-mono text-xs text-fg-muted">{formatCoord(marker.lat, marker.lng)}</p>
        {marker.note ? <p className="mt-3 text-sm leading-relaxed text-fg-muted">{marker.note}</p> : null}
        <div className="mt-4 flex gap-2">
          <Button size="sm" variant="secondary" onClick={() => requestFlyTo(marker.lat, marker.lng, 1.62)}>
            <Navigation className="size-3.5" />
            定位
          </Button>
          <Button size="sm" variant="ghost" onClick={() => removeMarker(marker.id)}>
            删除
          </Button>
        </div>
      </article>
    );
  }

  if (!selectedIso) return null;
  const country = COUNTRY_BY_ISO.get(selectedIso);
  if (!country) return null;
  const lit = visited.includes(country.iso);

  return (
    <article className="card-enter pointer-events-auto w-full max-w-sm rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-medium tracking-tight text-fg">{country.nameZh}</h2>
          <p className="mt-0.5 text-sm text-fg-muted">{country.nameEn}</p>
        </div>
        <span className="rounded-sm bg-surface-2 px-1.5 py-0.5 font-mono text-xs text-fg-muted">
          {country.iso}
        </span>
      </div>
      <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm">
        <dt className="text-fg-subtle">首都</dt>
        <dd className="text-fg">
          {country.capitalZh || country.capital || "—"}
          {country.capitalZh && country.capital && country.capitalZh !== country.capital ? (
            <span className="ml-1.5 text-fg-muted">{country.capital}</span>
          ) : null}
        </dd>
        <dt className="text-fg-subtle">坐标</dt>
        <dd className="font-mono text-xs text-fg-muted">{formatCoord(country.lat, country.lng)}</dd>
      </dl>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button size="sm" onClick={() => toggleVisited(country.iso)}>
          {lit ? <Check className="size-3.5" /> : <MapPin className="size-3.5" />}
          {lit ? "已点亮" : "点亮打卡"}
        </Button>
        <Button size="sm" variant="secondary" onClick={() => requestFlyTo(country.lat, country.lng, 1.82)}>
          <Navigation className="size-3.5" />
          飞向这里
        </Button>
        <Button size="sm" variant="ghost" onClick={clearSelection}>
          关闭
        </Button>
      </div>
    </article>
  );
}
