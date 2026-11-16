import type { Metadata } from "next";
import { spaceGrotesk, inter } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  ...buildMetadata({
    title: "Hammad Ahmad | Business Development Executive at Deep Dev Solutions",
    description:
      "Right buyers, real conversations. Hammad Ahmad is a Business Development Executive at Deep Dev Solutions and runs SEO campaigns.",
    path: "/",
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
