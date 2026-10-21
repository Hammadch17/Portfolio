import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <Section className="pt-10 md:pt-16">
      <div className="text-center">
        <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-text">
          Page not found
        </h1>
        <p className="mt-6 text-lg text-muted">
          The page you are looking for does not exist.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </Section>
  );
}
