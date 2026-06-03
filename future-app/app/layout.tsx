import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "西部创源工作台",
  description: "西部创源工作台应用底座",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
