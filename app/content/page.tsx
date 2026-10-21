import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { ContentGallery } from "@/components/ContentGallery";
import { site } from "@/data/site";
import { contentPieces } from "@/data/contentPieces";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Content | Hammad Ahmad",
  description:
    "LinkedIn posts, carousels and ad creatives I have written and designed.",
  path: "/content",
});

export default function ContentPage() {
  if (!site.showContent) {
    notFound();
  }

  return (
    <>
      <Section className="pt-10 md:pt-16">
        <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-text">
          Content
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Posts, carousels and ad creatives I have written and designed.
          Client details are removed.
        </p>
      </Section>

      <Section className="pt-0">
        <ContentGallery pieces={contentPieces} />
      </Section>

      <Section className="border-t border-border">
        <div className="text-center">
          <Button href="/contact#book">Book a call</Button>
        </div>
      </Section>
    </>
  );
}
