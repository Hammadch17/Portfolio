import localFont from "next/font/local";

export const spaceGrotesk = localFont({
  src: "../public/fonts/space-grotesk-600.woff2",
  variable: "--font-space-grotesk",
  weight: "600",
  display: "swap",
});

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});
