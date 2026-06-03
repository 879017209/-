import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "西部创源标注平台",
  description: "西部创源标注平台应用底座",
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
