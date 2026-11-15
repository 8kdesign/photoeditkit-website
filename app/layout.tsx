import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PhotoEditKit — one call gives a photo the edit it needs",
    template: "%s · PhotoEditKit",
  },
  description:
    "On-device photo editing for iOS, macOS and Android. PhotoEditKit analyzes each photo and suggests ranked edits you can show in a picker or apply instantly. Zero network requests.",
  openGraph: {
    title: "PhotoEditKit",
    description: "One call gives a photo the edit it needs, entirely on the device.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
