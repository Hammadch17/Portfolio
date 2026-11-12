import { Plus } from "lucide-react";

export function Faq({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="divide-y divide-border rounded-xl border border-border">
      {items.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-text [&::-webkit-details-marker]:hidden">
            {item.question}
            <Plus
              size={18}
              className="shrink-0 text-accent transition-transform duration-200 ease-out group-open:rotate-45"
              aria-hidden
            />
          </summary>
          <p className="mt-3 text-base text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
