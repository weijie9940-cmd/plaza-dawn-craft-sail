import { useEffect, useState } from "react";
import { ArrowUpRight, BookOpen, X } from "lucide-react";
import { searchEsports } from "@/lib/explore-search";
import { useGlobeStore } from "@/store/globe-store";
import { activateEsportsResult } from "./explore-navigation";

const KEY = "orbital-explore-intro-v1";
export function ExploreIntro() {
  const [visible, setVisible] = useState(false);
  const ready = useGlobeStore((s) => s.texturesReady);
  const busy = useGlobeStore((s) =>
    Boolean(
      s.comparisonTeams ||
      s.activeStoryId ||
      s.storyPickerOpen ||
      s.selectedIso ||
      s.highlightedTeam ||
      s.selectedMarker ||
      s.markerClusterIds.length ||
      s.rankingOpen ||
      s.panelOpen ||
      s.pinMode,
    ),
  );
  useEffect(() => {
    try {
      setVisible(localStorage.getItem(KEY) !== "dismissed");
    } catch {
      setVisible(true);
    }
  }, []);
  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(KEY, "dismissed");
    } catch {
      /* Keep the current session usable. */
    }
  };
  if (!visible || !ready || busy) return null;
  return (
    <aside
      className="explore-intro pointer-events-auto rounded-2xl border border-white/10 bg-surface/95 p-4 shadow-xl"
      aria-label="探索指南"
    >
      <button
        type="button"
        className="absolute top-1.5 right-1.5 inline-flex size-11 items-center justify-center rounded-lg text-fg-muted hover:text-fg"
        aria-label="关闭探索指南"
        onClick={dismiss}
      >
        <X className="size-4" />
      </button>
      <p className="pr-8 text-[11px] tracking-[0.15em] text-marker-major">CS 电竞历史地图</p>
      <h2 className="mt-2 text-lg font-medium tracking-tight">每座城市，都有冠军的故事。</h2>
      <p className="mt-2 text-xs leading-6 text-fg-muted">
        点击奖杯或数字查看赛事，拖动年份回顾历史。
        <br />
        也可以从一支战队的夺冠足迹开始。
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-marker-major px-3 text-xs font-medium text-bg hover:brightness-110"
          onClick={() => {
            useGlobeStore.getState().setStoryPickerOpen(true);
            dismiss();
          }}
        >
          <BookOpen className="size-3.5" /> 跟着故事探索
        </button>
        {[
          { query: "navi", label: "NAVI 夺冠版图", kind: "team" },
          { query: "科隆", label: "探索科隆", kind: "city" },
        ].map((item) => (
          <button
            key={item.query}
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-surface-2 px-3 text-xs text-fg hover:bg-white/10"
            onClick={() => {
              const result = searchEsports(item.query).find((r) => r.kind === item.kind);
              if (result) {
                activateEsportsResult(result);
                dismiss();
              }
            }}
          >
            {item.label}
            <ArrowUpRight className="size-3.5 text-marker-major" />
          </button>
        ))}
      </div>
    </aside>
  );
}
