import { lazy, Suspense, useEffect, useState } from "react";
import { Hud } from "@/components/hud/Hud";
import { useGlobeStore } from "@/store/globe-store";

const GlobeCanvas = lazy(() =>
  import("@/components/globe/GlobeCanvas").then((m) => ({ default: m.GlobeCanvas })),
);

export function App() {
  const [mounted, setMounted] = useState(false);
  const hydrate = useGlobeStore((s) => s.hydrate);

  useEffect(() => {
    hydrate();
    setMounted(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const s = useGlobeStore.getState();
        if (s.pendingPin) s.setPendingPin(null);
        else if (s.pinMode) s.setPinMode(false);
        else if (s.highlightedTeam) s.setHighlightedTeam(null);
        else if (s.panelOpen) s.setPanelOpen(false);
        else s.clearSelection();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hydrate]);

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-bg text-fg">
      <h1 className="sr-only">ORBITAL 寰宇 · 交互式 3D 地球仪</h1>
      {mounted ? (
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <GlobeCanvas />
          </Suspense>
        </div>
      ) : null}
      <Hud />
    </main>
  );
}
