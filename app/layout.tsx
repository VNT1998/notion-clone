import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion",
  description: "The connected workspace",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/notion_light.svg",
        href: "/notion_light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/notion_dark.svg",
        href: "/notion_dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
