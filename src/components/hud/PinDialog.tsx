import { useEffect, useState } from "react";
import { formatCoord } from "@/lib/geo";
import { useGlobeStore } from "@/store/globe-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export function PinDialog() {
  const pending = useGlobeStore((s) => s.pendingPin);
  const setPendingPin = useGlobeStore((s) => s.setPendingPin);
  const addMarker = useGlobeStore((s) => s.addMarker);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (pending) {
      setName("");
      setNote("");
    }
  }, [pending]);

  const open = Boolean(pending);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && setPendingPin(null)}>
      <DialogContent>
        <DialogTitle>添加标记</DialogTitle>
        <DialogDescription>
          {pending ? formatCoord(pending.lat, pending.lng) : ""}
        </DialogDescription>
        <form
          className="mt-4 flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (!pending || !name.trim()) return;
            addMarker({
              name: name.trim(),
              note: note.trim(),
              lat: pending.lat,
              lng: pending.lng,
            });
          }}
        >
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-fg-muted">名称</span>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="例如：第一次落地"
              autoFocus
              required
              maxLength={48}
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-fg-muted">备注</span>
            <Input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="可选"
              maxLength={160}
            />
          </label>
          <div className="mt-1 flex justify-end gap-2">
            <Button type="button" variant="ghost" onClick={() => setPendingPin(null)}>
              取消
            </Button>
            <Button type="submit" disabled={!name.trim()}>
              保存
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
