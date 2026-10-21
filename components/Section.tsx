export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`py-14 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-[1120px] px-4 md:px-6">{children}</div>
    </section>
  );
}
