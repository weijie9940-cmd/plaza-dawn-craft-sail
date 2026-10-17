import { useEffect, useRef, useState } from "react";

export function EventMvp({
  mvpId,
  team,
  src,
  eventName,
}: {
  mvpId: string;
  team: string;
  src: string;
  eventName: string;
}) {
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const figureRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    figureRef.current?.scrollIntoView({ block: "nearest" });
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (!img?.complete) return;
    if (img.naturalWidth > 0) setReady(true);
    else setFailed(true);
  }, [src]);

  if (failed) return null;

  return (
    <figure ref={figureRef} className="mt-2 flex items-start gap-3">
      <div className="relative aspect-[3/4] w-28 shrink-0">
        {ready ? null : <div className="absolute inset-0 animate-pulse rounded-lg bg-surface-2" aria-hidden />}
        <img
          ref={imgRef}
          src={src}
          alt={`${mvpId} · ${eventName} MVP`}
          loading="lazy"
          decoding="async"
          className="aspect-[3/4] w-28 shrink-0 rounded-lg bg-surface-2 object-cover"
          onLoad={() => setReady(true)}
          onError={() => setFailed(true)}
        />
      </div>
      <figcaption>
        <p className="text-sm text-fg-muted">
          MVP：<span className="font-medium text-fg">{mvpId}</span>
        </p>
        <p className="text-xs text-fg-subtle">{team}</p>
        <p className="mt-1 text-[11px] leading-snug text-fg-subtle">图片来源：HLTV</p>
      </figcaption>
    </figure>
  );
}
