import type { Metadata, Viewport } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// TODO(font): The brand typeface "Copy" (bold condensed grotesk) is not
// available via next/font/google. Space Grotesk is the sanctioned fallback
// per the design contract — if a licensed "Copy" webfont file becomes
// available, self-host it with @fontsource and swap the variable below.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://open-agent.agency"),
  title: {
    default: "Open Agent — AI-Powered Growth Team for E-Commerce",
    template: "%s — Open Agent",
  },
  description:
    "A six-person growth team that automates e-commerce brands with AI. Digital marketing, SEO, content, AI automation, AI agents and video that show numbers.",
  openGraph: {
    title: "Open Agent — AI-Powered Growth Team for E-Commerce",
    description:
      "We don't just market your store. We automate it. A six-person team using AI to grow e-commerce brands.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060606",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-primary font-sans text-gray-body">
        {children}
        <noscript>
          <style>{`[style*="opacity"]{opacity:1!important}[style*="translateY"]{transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
