import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { searchCountries } from "@/data/countries";
import { useGlobeStore } from "@/store/globe-store";
import { cn } from "@/lib/utils";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const selectCountry = useGlobeStore((s) => s.selectCountry);
  const requestFlyTo = useGlobeStore((s) => s.requestFlyTo);

  const results = useMemo(() => searchCountries(query, 8), [query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        input.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const pick = (index: number) => {
    const c = results[index];
    if (!c) return;
    selectCountry(c.iso);
    requestFlyTo(c.lat, c.lng, 1.82);
    setQuery(c.nameZh);
    setOpen(false);
  };

  return (
    <div ref={wrap} className="relative w-full max-w-md" data-interactive>
      <div className="flex h-11 items-center gap-2 rounded-lg bg-surface px-3 shadow-[var(--shadow-border)]">
        <Search className="size-4 shrink-0 text-fg-subtle" aria-hidden />
        <input
          ref={input}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActive(0);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => Math.min(results.length - 1, i + 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => Math.max(0, i - 1));
            } else if (e.key === "Enter") {
              e.preventDefault();
              pick(active);
            } else if (e.key === "Escape") {
              setOpen(false);
              input.current?.blur();
            }
          }}
          placeholder="搜索国家 / 首都"
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-fg-subtle"
          autoComplete="off"
          aria-label="搜索国家"
        />
        {query ? (
          <button
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-md text-fg-subtle hover:text-fg"
            onClick={() => {
              setQuery("");
              setOpen(false);
              input.current?.focus();
            }}
            aria-label="清除"
          >
            <X className="size-3.5" />
          </button>
        ) : (
          <kbd className="hidden rounded-sm bg-surface-2 px-1.5 py-0.5 font-mono text-xs text-fg-subtle sm:inline">
            /
          </kbd>
        )}
      </div>
      {open && query.trim() ? (
        <ul
          className="absolute top-full z-20 mt-2 w-full overflow-hidden rounded-lg bg-surface py-1 shadow-[var(--shadow-border)]"
          role="listbox"
        >
          {results.length === 0 ? (
            <li className="px-3 py-3 text-sm text-fg-muted">没有匹配的国家</li>
          ) : (
            results.map((c, i) => (
              <li key={c.iso}>
                <button
                  type="button"
                  role="option"
                  aria-selected={i === active}
                  className={cn(
                    "flex w-full items-baseline justify-between gap-3 px-3 py-2.5 text-left",
                    i === active ? "bg-surface-2" : "hover:bg-surface-2",
                  )}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => pick(i)}
                >
                  <span className="text-sm text-fg">{c.nameZh}</span>
                  <span className="truncate text-xs text-fg-muted">
                    {c.nameEn}
                    {c.capitalZh ? ` · ${c.capitalZh}` : ""}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
