import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Search, X, Trophy, MapPin, Flag, Users } from "lucide-react";
import { searchCountries, type Country } from "@/data/countries";
import { searchEsports, type EsportsResult } from "@/lib/explore-search";
import { useGlobeStore } from "@/store/globe-store";
import { cn } from "@/lib/utils";
import { activateEsportsResult } from "./explore-navigation";

type CountryResult = {
  kind: "country";
  id: string;
  label: string;
  detail: string;
  country: Country;
};
type Result = EsportsResult | CountryResult;
const TYPE_LABEL = { team: "战队", city: "城市", event: "赛事", country: "国家" };
const ICON = { team: Users, city: MapPin, event: Trophy, country: Flag };

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const resultList = useRef<HTMLUListElement>(null);
  const listId = useId();
  const results = useMemo<Result[]>(
    () =>
      [
        ...searchEsports(query, 6),
        ...searchCountries(query, 3).map((country): CountryResult => ({
          kind: "country",
          id: `country:${country.iso}`,
          label: country.nameZh,
          detail: `${country.nameEn} · ${country.capitalZh || country.capital}`,
          country,
        })),
      ].slice(0, 8),
    [query],
  );

  useEffect(() => {
    const list = resultList.current;
    const option = list?.children.item(active);
    if (!open || !list || !(option instanceof HTMLElement)) return;
    const box = list.getBoundingClientRect();
    const row = option.getBoundingClientRect();
    if (row.top < box.top) list.scrollTop -= box.top - row.top;
    else if (row.bottom > box.bottom) list.scrollTop += row.bottom - box.bottom;
  }, [active, open, query]);

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
    const onDoc = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDoc);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDoc);
    };
  }, []);

  const pick = (result: Result) => {
    const store = useGlobeStore.getState();
    store.setPanelOpen(false);
    store.setRankingOpen(false);
    if (result.kind === "country") {
      store.setHighlightedTeam(null);
      store.selectCountry(result.country.iso);
      store.requestFlyTo(result.country.lat, result.country.lng, 1.82);
    } else {
      activateEsportsResult(result);
    }
    setQuery(result.label);
    setOpen(false);
    input.current?.blur();
  };

  return (
    <div ref={wrap} className="explore-search relative w-full" data-interactive>
      <div className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-surface/95 px-3 focus-within:border-accent/60">
        <Search className="size-4 shrink-0 text-fg-muted" aria-hidden />
        <input
          ref={input}
          value={query}
          role="combobox"
          aria-expanded={open && Boolean(query.trim())}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={open && results[active] ? `${listId}-${active}` : undefined}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActive(0);
          }}
          onFocus={(e) => {
            setOpen(true);
            e.currentTarget.select();
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setOpen(true);
              setActive((i) => Math.min(Math.max(0, results.length - 1), i + 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => Math.max(0, i - 1));
            } else if (e.key === "Enter" && open && results[active]) {
              e.preventDefault();
              pick(results[active]);
            } else if (e.key === "Escape") {
              e.stopPropagation();
              setOpen(false);
              input.current?.blur();
            }
          }}
          placeholder="搜索战队、赛事、城市或国家"
          aria-label="搜索战队、赛事、城市或国家"
          className="h-full min-w-0 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-fg-subtle"
          autoComplete="off"
        />
        {query ? (
          <button
            type="button"
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-fg-muted hover:bg-surface-2"
            aria-label="清除搜索"
            onClick={() => {
              setQuery("");
              setActive(0);
              input.current?.focus();
            }}
          >
            <X className="size-4" />
          </button>
        ) : (
          <kbd className="hidden rounded bg-surface-2 px-1.5 py-0.5 font-mono text-xs text-fg-subtle sm:inline">
            /
          </kbd>
        )}
      </div>
      {open && query.trim() ? (
        <div className="absolute top-full z-40 mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-surface shadow-xl">
          <p className="px-3 pt-3 pb-2 text-[11px] text-fg-muted">
            搜索全部收录 · 选择结果后定位地图
          </p>
          <ul
            ref={resultList}
            id={listId}
            role="listbox"
            aria-label="搜索结果"
            className="max-h-[min(55dvh,26rem)] overflow-y-auto p-1"
          >
            {results.length === 0 ? (
              <li className="px-3 py-5 text-sm text-fg-muted">
                没有匹配结果，试试 NAVI、科隆或 Major。
              </li>
            ) : (
              results.map((result, i) => {
                const Icon = ICON[result.kind];
                return (
                  <li
                    key={result.id}
                    id={`${listId}-${i}`}
                    role="option"
                    aria-selected={i === active}
                  >
                    <button
                      type="button"
                      tabIndex={-1}
                      className={cn(
                        "flex min-h-14 w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left",
                        i === active ? "bg-surface-2" : "hover:bg-surface-2",
                      )}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => pick(result)}
                    >
                      <Icon
                        className={cn(
                          "size-4 shrink-0",
                          result.kind === "country" ? "text-accent" : "text-marker-major",
                        )}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm text-fg">{result.label}</span>
                        <span className="mt-0.5 block truncate text-xs text-fg-muted">
                          {result.detail}
                        </span>
                      </span>
                      <span className="shrink-0 rounded bg-white/5 px-1.5 py-1 text-[10px] text-fg-muted">
                        {TYPE_LABEL[result.kind]}
                      </span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
