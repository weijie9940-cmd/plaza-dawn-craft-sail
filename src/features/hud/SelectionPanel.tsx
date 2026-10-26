import { ComparisonPanel } from "./ComparisonPanel";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { COUNTRY_BY_ISO } from "@/data/countries";
import { CS2_MAJORS } from "@/data/cs2-majors";
import { CHAMPION_LABEL, championKey, citiesUpToYear } from "@/data/s-tier-events";
import { majorEventId } from "@/data/major-trophy-photos";
import { useGlobeStore } from "@/store/globe-store";
import { CountryCard } from "./CountryCard";
import { TeamJourney, BackToTeamJourney } from "./TeamJourney";
import { teamJourney } from "@/lib/team-journey";

export function SelectionPanel() {
  const s = useGlobeStore();
  if (s.comparisonTeams) return <ComparisonPanel teams={s.comparisonTeams} />;
  const clusterCities = citiesUpToYear(s.sTierYear).filter((city) =>
    s.markerClusterIds.includes(city.id),
  );
  if (clusterCities.length)
    return (
      <aside
        className="selection-panel cluster-panel pointer-events-auto border border-white/10 bg-surface p-4"
        aria-label="选择赛事城市"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-medium">附近 {clusterCities.length} 座赛事城市</h2>
            <p className="mt-1 text-xs text-fg-muted">选择城市，查看赛事与冠军故事</p>
          </div>
          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg text-fg-muted hover:bg-surface-2"
            aria-label="关闭城市列表"
            onClick={() => s.setMarkerClusterIds([])}
          >
            <X className="size-4" />
          </button>
        </div>
        <ul className="mt-2 space-y-1">
          {clusterCities.map((city) => (
            <li key={city.id}>
              <button
                type="button"
                className="flex min-h-12 w-full items-center justify-between gap-3 rounded-lg px-3 text-left hover:bg-surface-2"
                onClick={() => {
                  s.selectMarker({ kind: "stier", id: city.id });
                  s.requestFlyTo(city.lat, city.lng, 1.62);
                }}
              >
                <span className="text-sm">
                  {city.cityZh}
                  <span className="ml-2 text-xs text-fg-muted">{city.city}</span>
                </span>
                <span className="shrink-0 text-xs text-marker-major">
                  {
                    city.events.filter(
                      (event) =>
                        !s.highlightedTeam || championKey(event.champion) === s.highlightedTeam,
                    ).length
                  }{" "}
                  场 ›
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>
    );
  const journeyVisible = Boolean(s.highlightedTeam && s.teamJourneyOpen);
  if (!s.selectedIso && !s.selectedMarker && !journeyVisible) return null;
  const city =
    s.selectedMarker?.kind === "stier"
      ? citiesUpToYear(s.sTierYear).find((c) => c.id === s.selectedMarker?.id)
      : null;
  const major =
    s.selectedMarker?.kind === "cs2" ? CS2_MAJORS.find((c) => c.id === s.selectedMarker?.id) : null;
  const country = s.selectedIso ? COUNTRY_BY_ISO.get(s.selectedIso) : null;
  const pin =
    s.selectedMarker?.kind === "custom"
      ? s.customMarkers.find((p) => p.id === s.selectedMarker?.id)
      : null;
  const journey = journeyVisible ? teamJourney(s.highlightedTeam!, s.sTierYear) : null;
  const title =
    journey?.title ?? city?.cityZh ?? major?.cityZh ?? country?.nameZh ?? pin?.name ?? "详情";
  const events =
    city?.events.filter(
      (event) => !s.highlightedTeam || championKey(event.champion) === s.highlightedTeam,
    ) ?? [];
  const event = events.find((item) => majorEventId(item) === s.focusedEventId) ?? events[0];
  const subtitle = journey
    ? `夺冠历程 · ${journey.events.length} 冠 · ${journey.cityCount} 城`
    : city
      ? s.highlightedTeam
        ? `${CHAMPION_LABEL[s.highlightedTeam] ?? s.highlightedTeam} · ${events.length} 场冠军`
        : event
          ? `${event.year} · ${event.name}`
          : `${events.length} 场赛事`
      : major
        ? `${major.events.filter((item) => item.year <= s.sTierYear).length} 场 Major`
        : (country?.nameEn ?? "我的标记");
  return (
    <section
      className="selection-panel pointer-events-auto"
      data-expanded={s.mobileDetailsExpanded}
      aria-label={`${title}详情`}
    >
      <div className="sheet-heading">
        <button
          type="button"
          className="flex min-h-16 min-w-0 flex-1 items-center gap-3 text-left"
          aria-expanded={s.mobileDetailsExpanded}
          aria-controls="selection-content"
          onClick={() => s.setMobileDetailsExpanded(!s.mobileDetailsExpanded)}
        >
          <span className="min-w-0 flex-1">
            <span className="block truncate text-base font-medium">{title}</span>
            <span className="mt-1 block truncate text-xs text-fg-muted">
              {s.mobileDetailsExpanded ? "收起详情，继续探索地图" : subtitle}
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-1 text-xs text-marker-major">
            {s.mobileDetailsExpanded ? "收起" : "详情"}
            {s.mobileDetailsExpanded ? (
              <ChevronDown className="size-4" />
            ) : (
              <ChevronUp className="size-4" />
            )}
          </span>
        </button>
        <button
          type="button"
          className="ml-2 inline-flex size-11 shrink-0 items-center justify-center rounded-lg text-fg-muted hover:bg-surface-2"
          aria-label="关闭详情"
          onClick={s.clearSelection}
        >
          <X className="size-4" />
        </button>
      </div>
      <div id="selection-content" className="selection-content">
        {journeyVisible ? (
          <div className="relative bg-surface">
            <button
              type="button"
              aria-label="关闭夺冠历程"
              className="journey-close absolute top-3 right-3 flex size-11 items-center justify-center rounded-lg text-fg-muted hover:bg-surface-2"
              onClick={s.clearSelection}
            >
              <X className="size-4" />
            </button>
            <TeamJourney />
          </div>
        ) : (
          <>
            {s.highlightedTeam ? <BackToTeamJourney /> : null}
            <CountryCard />
          </>
        )}
      </div>
    </section>
  );
}
