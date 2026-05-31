// Server Component: global layout and font configuration, no client-side interactivity required.
import type { Metadata } from "next";
import { Space_Grotesk, Sora } from "next/font/google";
import "@/app/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space"
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora"
});

export const metadata: Metadata = {
  title: "Lumos Learning Dashboard",
  description: "Student learning dashboard with premium motion and data-driven insights."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${sora.variable}`}>
      <body className="grain font-[var(--font-space)] bg-ink-900">
        {children}
      </body>
    </html>
  );
}
