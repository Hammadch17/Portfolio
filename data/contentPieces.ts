export type ContentPiece = {
  id: string;
  title: string;
  type: "post" | "carousel" | "ad";
  image: string;
  alt: string;
  note: string;
  date: string;
};

export const contentPieces: ContentPiece[] = [
  {
    id: "content-1",
    title: "[CONTENT PIECE 1 TITLE]",
    type: "post",
    image: "/content/placeholder-1.svg",
    alt: "[DESCRIBE THE DESIGN, NO CLIENT NAMES]",
    note: "[ONE LINE ON WHAT IT WAS FOR]",
    date: "2026-01-01",
  },
  {
    id: "content-2",
    title: "[CONTENT PIECE 2 TITLE]",
    type: "carousel",
    image: "/content/placeholder-2.svg",
    alt: "[DESCRIBE THE DESIGN, NO CLIENT NAMES]",
    note: "[ONE LINE ON WHAT IT WAS FOR]",
    date: "2026-01-15",
  },
  {
    id: "content-3",
    title: "[CONTENT PIECE 3 TITLE]",
    type: "ad",
    image: "/content/placeholder-3.svg",
    alt: "[DESCRIBE THE DESIGN, NO CLIENT NAMES]",
    note: "[ONE LINE ON WHAT IT WAS FOR]",
    date: "2026-02-01",
  },
  {
    id: "content-4",
    title: "[CONTENT PIECE 4 TITLE]",
    type: "post",
    image: "/content/placeholder-4.svg",
    alt: "[DESCRIBE THE DESIGN, NO CLIENT NAMES]",
    note: "[ONE LINE ON WHAT IT WAS FOR]",
    date: "2026-02-15",
  },
  {
    id: "content-5",
    title: "[CONTENT PIECE 5 TITLE]",
    type: "carousel",
    image: "/content/placeholder-5.svg",
    alt: "[DESCRIBE THE DESIGN, NO CLIENT NAMES]",
    note: "[ONE LINE ON WHAT IT WAS FOR]",
    date: "2026-03-01",
  },
  {
    id: "content-6",
    title: "[CONTENT PIECE 6 TITLE]",
    type: "ad",
    image: "/content/placeholder-6.svg",
    alt: "[DESCRIBE THE DESIGN, NO CLIENT NAMES]",
    note: "[ONE LINE ON WHAT IT WAS FOR]",
    date: "2026-03-15",
  },
];
