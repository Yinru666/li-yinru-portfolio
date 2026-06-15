import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: "李胤儒 | UAV-based Inspection × Computer Vision",
  description:
    "低空智能巡检、计算机视觉与交通基础设施安全方向的个人科研主页。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark h-full scroll-pt-24 font-sans antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <TooltipProvider delayDuration={180}>
          <Navbar />
          <main className="min-w-0 flex-1">{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
