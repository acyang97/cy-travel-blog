"use client";
import ScrollUp from "@/components/ScrollUp";
import "../../styles/global.css";
import AppFooter from "./AppFooter";
import AppNavBar from "./AppNavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="font-main">
        <main className="relative">
          <AppNavBar />
          <div className="relative">
            <div className="flex flex-col h-screen">
              <div className="flex-grow">{children}</div>
              <AppFooter />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
