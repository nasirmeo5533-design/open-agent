import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Digital Minds-style typography: Poppins (bold modern sans) for both
// display and body. The old Playfair/Space Grotesk pair was retired with
// the dark premium theme.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
  themeColor: "#0B1B3A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-white font-sans text-ink">
        {children}
        <noscript>
          <style>{`[style*="opacity"]{opacity:1!important}[style*="translateY"]{transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
