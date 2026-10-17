import { useEffect, useRef, useState } from "react";
import { MVP_PHOTO_ROSTER, mvpPhotoSrc } from "@/data/mvp-photos";
import { cn } from "@/lib/utils";

function MvpFrame({
  id,
  src,
  onError,
}: {
  id: string;
  src: string;
  onError: () => void;
}) {
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    ref.current?.scrollIntoView({ block: "nearest" });
  }, []);
  return (
    <img
      ref={ref}
      src={src}
      alt={`${id} 手持 MVP 奖章`}
      loading="lazy"
      decoding="async"
      className="mb-2 aspect-[3/4] w-full rounded-lg bg-surface-2 object-cover"
      onError={onError}
    />
  );
}

export function MvpPhotos() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [failedId, setFailedId] = useState<string | null>(null);
  const openSrc = openId ? mvpPhotoSrc(openId) : null;

  return (
    <section className="mt-3 px-2">
      <h3 className="mb-1.5 text-xs font-medium tracking-wide text-fg-muted">
        MVP 奖章（{MVP_PHOTO_ROSTER.filter((row) => row.src).length}）
      </h3>
      <ul>
        {MVP_PHOTO_ROSTER.map((row) => {
          const available = row.src !== null;
          const open = openId === row.id;
          const failed = failedId === row.id;
          return (
            <li key={row.id} className="border-b border-white/5 last:border-0">
              <div className="flex items-center justify-between gap-2 px-2 py-1.5">
                <span className={cn("truncate text-sm", available ? "text-fg" : "text-fg-subtle")}>
                  {row.id}
                </span>
                <button
                  type="button"
                  disabled={!available}
                  title={available ? `${row.id} 的 MVP 照片` : "暂无可用照片"}
                  aria-label={available ? `查看 ${row.id} 的照片` : `${row.id} 暂无可用照片`}
                  className={cn(
                    "shrink-0 rounded-md px-2 py-1 text-xs",
                    available
                      ? "text-fg underline-offset-2 hover:bg-white/10 hover:underline"
                      : "cursor-not-allowed text-fg-subtle opacity-40",
                  )}
                  onClick={() => {
                    if (!mvpPhotoSrc(row.id)) return;
                    setFailedId(null);
                    setOpenId(open ? null : row.id);
                  }}
                >
                  照片
                </button>
              </div>
              {open ? (
                failed || !openSrc ? (
                  <p className="px-2 pb-2 text-xs text-fg-subtle">暂无照片</p>
                ) : (
                  <>
                    <MvpFrame id={row.id} src={openSrc} onError={() => setFailedId(row.id)} />
                    <p className="mb-2 text-[11px] leading-snug text-fg-subtle">图片来源：HLTV</p>
                  </>
                )
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
