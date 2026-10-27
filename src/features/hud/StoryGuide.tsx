import { ArrowLeft, ArrowRight, BookOpen, MapPin, RotateCcw, Trophy, X } from "lucide-react";
import { getStory, STORY_OPTIONS } from "@/lib/guided-stories";
import { useGlobeStore } from "@/store/globe-store";

export function StoryGuide() {
  const s = useGlobeStore();
  if (s.storyPickerOpen) {
    return (
      <aside className="story-guide story-picker pointer-events-auto" aria-label="选择探索故事">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="story-eyebrow">沿着赛事前进</p>
            <h2 className="mt-1 text-lg font-medium">选一段冠军旅程</h2>
            <p className="mt-1 text-xs leading-5 text-fg-muted">逐站看赛事，地图会跟着你前往下一座城市。</p>
          </div>
          <button type="button" className="story-icon-button" aria-label="关闭故事列表" onClick={() => s.setStoryPickerOpen(false)}>
            <X className="size-4" />
          </button>
        </div>
        <div className="story-picker-list mt-4">
          {STORY_OPTIONS.map((option) => {
            const count = getStory(option.id).stops.length;
            return (
              <button
                key={option.id}
                type="button"
                className="story-picker-item"
                onClick={() => s.startStory(option.id)}
                disabled={!count}
              >
                <span className="flex min-w-0 items-center gap-2">
                  {option.id === "majors" ? <Trophy className="size-4 shrink-0 text-marker-major" /> : <BookOpen className="size-4 shrink-0 text-accent" />}
                  <span className="truncate font-medium">{option.title}</span>
                </span>
                <span className="mt-1 block text-[11px] leading-5 text-fg-muted">{option.description}</span>
                <span className="mt-2 block text-[11px] text-marker-major">{count} 站 · 开始探索 →</span>
              </button>
            );
          })}
        </div>
      </aside>
    );
  }
  if (!s.activeStoryId || s.selectedIso || s.selectedMarker || s.markerClusterIds.length) return null;
  const story = getStory(s.activeStoryId);
  const stop = story.stops[s.storyStep];
  if (!stop) return null;
  const last = s.storyStep === story.stops.length - 1;
  return (
    <aside className="story-guide story-chapter pointer-events-auto" aria-label={`${story.title}故事导览`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="story-eyebrow">故事探索 · {story.title}</p>
          <h2 className="mt-1 text-lg font-medium">{stop.cityZh}</h2>
        </div>
        <button type="button" className="story-icon-button" aria-label="退出故事探索" onClick={s.stopStory}>
          <X className="size-4" />
        </button>
      </div>
      <div className="story-progress mt-3" aria-label={`第 ${s.storyStep + 1} 站，共 ${story.stops.length} 站`}>
        {story.stops.map((row, index) => (
          <span key={row.eventId} data-current={index === s.storyStep || undefined} data-past={index < s.storyStep || undefined} />
        ))}
      </div>
      <p className="mt-3 font-mono text-[11px] tabular-nums text-marker-major">
        {stop.event.year}.{String(stop.event.month).padStart(2, "0")} · {s.storyStep + 1}/{story.stops.length}
      </p>
      <h3 className="mt-1 text-sm font-medium leading-5">{stop.event.name}</h3>
      <p className="mt-2 text-xs leading-5 text-fg-muted">{stop.caption}</p>
      <div className="story-actions mt-4">
        <button type="button" className="story-secondary-button" onClick={s.openStoryEvent}>
          <MapPin className="size-3.5" /> 查看这场赛事
        </button>
        <div className="flex items-center gap-2">
          <button type="button" className="story-icon-button" aria-label="上一站" disabled={s.storyStep === 0} onClick={() => s.moveStory(-1)}>
            <ArrowLeft className="size-4" />
          </button>
          <button type="button" className="story-next-button" onClick={() => s.moveStory(last ? -s.storyStep : 1)}>
            {last ? <RotateCcw className="size-3.5" /> : null}
            {last ? "重新开始" : "下一站"}
            {!last ? <ArrowRight className="size-3.5" /> : null}
          </button>
        </div>
      </div>
    </aside>
  );
}
