import Image from "next/image";
import type { ContentPiece } from "@/data/contentPieces";

const typeLabels: Record<ContentPiece["type"], string> = {
  post: "Post",
  carousel: "Carousel",
  ad: "Ad",
};

export function ContentCard({
  piece,
  onOpen,
}: {
  piece: ContentPiece;
  onOpen?: () => void;
}) {
  const date = new Date(piece.date);
  const dateLabel = date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full text-left rounded-xl border border-border bg-surface overflow-hidden transition-all duration-150 ease-out hover:border-text hover:-translate-y-0.5"
    >
      <div className="relative aspect-square bg-bg">
        <Image
          src={piece.image}
          alt={piece.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-green">
          {typeLabels[piece.type]}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-text">
          {piece.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{piece.note}</p>
        <p className="mt-2 text-xs text-muted">{dateLabel}</p>
      </div>
    </button>
  );
}
