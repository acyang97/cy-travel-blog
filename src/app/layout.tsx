"use client";
import Script from "next/script";
import React from "react";
import "../../styles/global.css";
import AppFooter from "./AppFooter";
import AppNavBar from "./AppNavBar";

type GoogleAnalyticsProps = {
  measurementId: string;
};

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
};

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
      <GoogleAnalytics measurementId="G-RZ23RK8D93" />
    </html>
  );
}
