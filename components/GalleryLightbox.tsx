"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type GalleryItem = { src: string; alt: string; kind: "desktop" | "mobile" };

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    const index = openIndex;
    setOpenIndex(null);
    if (index !== null) {
      triggerRefs.current[index]?.focus();
    }
  };

  useEffect(() => {
    if (openIndex === null) return;

    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
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
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex]);

  if (items.length === 0) return null;

  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.src}
            ref={(el) => {
              triggerRefs.current[i] = el;
            }}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group overflow-hidden rounded-xl border border-border bg-surface text-left transition-colors duration-150 ease-out hover:border-accent"
          >
            <div
              className={
                item.kind === "mobile"
                  ? "relative mx-auto aspect-[9/19] w-2/3 overflow-hidden rounded-[18px] border-4 border-bg"
                  : "relative aspect-[16/10] w-full"
              }
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          ref={dialogRef}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text transition-colors duration-150 ease-out hover:border-accent"
            aria-label="Close image"
          >
            <X size={20} aria-hidden />
          </button>
          <div className="relative max-h-[85vh] w-full max-w-4xl">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                quality={90}
                sizes="90vw"
                className="rounded-lg object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm text-muted">{active.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
