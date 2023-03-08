"use client";
import "../../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-6 py-6 text-center text-slate-400">
        <br />
        <h3>Developed by me</h3>
      </div>
    </footer>
  );
  return (
    <html>
      <head />
      <body className="font-main">
        <div>
          <div className="">{children}</div>
          {/* <div className="mx-auto max-w-2xl px-6">{children}</div> */}
          {footer}
        </div>
      </body>
    </html>
  );
}
