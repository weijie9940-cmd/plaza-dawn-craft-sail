import * as Menu from "@radix-ui/react-dropdown-menu";
import {
  Check,
  BookOpen,
  ChevronDown,
  Grid3x3,
  List,
  ListOrdered,
  MapPinPlus,
  Medal,
  MoreHorizontal,
  Sun,
  Trophy,
} from "lucide-react";
import { useGlobeStore } from "@/store/globe-store";
import { cn } from "@/lib/utils";

const ITEM =
  "flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-3 text-sm text-fg outline-none data-[highlighted]:bg-surface-2";
const CONTENT = "z-50 min-w-56 rounded-xl border border-white/10 bg-surface p-1.5 shadow-xl";

export function Toolbar() {
  const s = useGlobeStore();
  return (
    <nav className="pointer-events-auto flex shrink-0 items-center gap-1.5" aria-label="地图工具">
      <Menu.Root>
        <Menu.Trigger
          className={cn("toolbar-button", (s.showSTier || s.showCs2Majors) && "text-marker-major")}
        >
          <Trophy className="size-4" />
          <span>赛事图层</span>
          <ChevronDown className="size-3 text-fg-muted" />
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Content className={CONTENT} sideOffset={8} align="end" collisionPadding={12}>
            <Menu.Label className="px-3 py-2 text-xs text-fg-muted">地图上显示</Menu.Label>
            <Menu.CheckboxItem
              className={ITEM}
              checked={s.showSTier}
              onCheckedChange={s.setShowSTier}
              onSelect={(e) => e.preventDefault()}
            >
              <Trophy className="size-4 text-marker-major" />S 级赛事与冠军城市
              <Menu.ItemIndicator className="ml-auto">
                <Check className="size-4" />
              </Menu.ItemIndicator>
            </Menu.CheckboxItem>
            <Menu.CheckboxItem
              className={ITEM}
              checked={s.showCs2Majors}
              onCheckedChange={s.setShowCs2Majors}
              onSelect={(e) => e.preventDefault()}
            >
              <Medal className="size-4 text-accent" />
              Major 举办城市
              <Menu.ItemIndicator className="ml-auto">
                <Check className="size-4" />
              </Menu.ItemIndicator>
            </Menu.CheckboxItem>
            <p className="px-3 pt-1 pb-2 text-[11px] leading-relaxed text-fg-subtle">
              重叠城市合并显示，点击数字放大查看。
            </p>
          </Menu.Content>
        </Menu.Portal>
      </Menu.Root>
      <button
        type="button"
        className={cn("toolbar-button", s.rankingOpen && "text-accent")}
        aria-pressed={s.rankingOpen}
        onClick={() => s.setRankingOpen(!s.rankingOpen)}
      >
        <ListOrdered className="size-4" />
        <span>世界排名</span>
      </button>
      <Menu.Root>
        <Menu.Trigger className="toolbar-button px-3" aria-label="更多地图工具">
          <MoreHorizontal className="size-5" />
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Content className={CONTENT} sideOffset={8} align="end" collisionPadding={12}>
            <Menu.Label className="px-3 py-2 text-xs text-fg-muted">显示设置</Menu.Label>
            <Menu.CheckboxItem
              className={ITEM}
              checked={s.showGraticule}
              onCheckedChange={s.setShowGraticule}
              onSelect={(e) => e.preventDefault()}
            >
              <Grid3x3 className="size-4" />
              经纬网
              <Menu.ItemIndicator className="ml-auto">
                <Check className="size-4" />
              </Menu.ItemIndicator>
            </Menu.CheckboxItem>
            <Menu.CheckboxItem
              className={ITEM}
              checked={s.showDaylight}
              onCheckedChange={s.setShowDaylight}
              onSelect={(e) => e.preventDefault()}
            >
              <Sun className="size-4" />
              日照
              <Menu.ItemIndicator className="ml-auto">
                <Check className="size-4" />
              </Menu.ItemIndicator>
            </Menu.CheckboxItem>
            <Menu.Separator className="my-1 h-px bg-white/10" />
            <Menu.Label className="px-3 py-2 text-xs text-fg-muted">我的探索</Menu.Label>
            <Menu.Item className={ITEM} onSelect={() => s.setStoryPickerOpen(true)}>
              <BookOpen className="size-4 text-marker-major" />
              故事探索
            </Menu.Item>
            <Menu.Item className={ITEM} onSelect={() => s.setPinMode(!s.pinMode)}>
              <MapPinPlus className="size-4" />
              {s.pinMode ? "退出放置标记" : "放置标记"}
            </Menu.Item>
            <Menu.Item className={ITEM} onSelect={() => s.setPanelOpen(!s.panelOpen)}>
              <List className="size-4" />
              足迹与收藏
            </Menu.Item>
          </Menu.Content>
        </Menu.Portal>
      </Menu.Root>
    </nav>
  );
}
