"use client";
import "../../styles/global.css";
import Image from "next/image";
import HomePageHeaderImage from "../../public/images/HomePage/home-page-header.jpg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex my-6 items-center justify-center flex-col">
        <Image
          className="
          h-64 mb-10 object-cover object-center rounded overflow-hidden"
          alt="hero"
          src={HomePageHeaderImage}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-6xl mb-4 font-medium text-gray-900">
            Welcome to my Travel Blog!
          </h1>
          <p className="my-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
        </div>
      </div>
    </header>
  );

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
        {header}
        <div>
          <div className="mx-auto max-w-2xl px-6">{children}</div>
          {footer}
        </div>
      </body>
    </html>
  );
}
