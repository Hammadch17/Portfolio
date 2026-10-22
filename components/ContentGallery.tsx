"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { ContentCard } from "@/components/ContentCard";
import type { ContentPiece } from "@/data/contentPieces";

type Filter = "all" | ContentPiece["type"];

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "post", label: "Posts" },
  { value: "carousel", label: "Carousels" },
  { value: "ad", label: "Ads" },
];

export function ContentGallery({ pieces }: { pieces: ContentPiece[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all" ? pieces : pieces.filter((p) => p.type === filter),
    [pieces, filter],
  );

  const openPiece = pieces.find((p) => p.id === openId) ?? null;

  useEffect(() => {
    if (!openPiece) return;

    triggerRef.current = document.activeElement as HTMLElement;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenId(null);
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          "button, [href], input, [tabindex]:not([tabindex='-1'])",
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [openPiece]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter by type"
        className="flex flex-wrap gap-3"
      >
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            role="tab"
            aria-selected={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150 ${
              filter === f.value
                ? "border-text bg-text text-bg"
                : "border-border text-muted hover:border-text hover:text-text"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-lg text-muted">Nothing here yet.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((piece) => (
            <ContentCard
              key={piece.id}
              piece={piece}
              onOpen={() => setOpenId(piece.id)}
            />
          ))}
        </div>
      )}

      {openPiece && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpenId(null)}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={openPiece.title}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-xl bg-surface p-4"
          >
            <button
              type="button"
              onClick={() => setOpenId(null)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-surface p-2 text-text"
            >
              <X size={20} />
            </button>
            <div className="relative aspect-square w-full">
              <Image
                src={openPiece.image}
                alt={openPiece.alt}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-text">
              {openPiece.title}
            </h2>
            <p className="mt-1 text-sm text-muted">{openPiece.note}</p>
          </div>
        </div>
      )}
    </div>
  );
}
