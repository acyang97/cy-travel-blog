// import Image from 'next/image'
import { Inter } from "@next/font/google";
import CountryPreview from "./CountryPreview";
import { countriesTravelledTo } from "@/constants/country.constants";
import Image from "next/image";
import HomePageHeaderImage from "../../public/images/HomePage/home-page-header.jpg";
// import styles from './page.module.css'
const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
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
          {/* TODO: Update this */}
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
  // I want to read all these posts
  const countruyPreviews = countriesTravelledTo.map((country) => (
    <CountryPreview key={country.name} {...country} />
  ));

  return (
    <div>
      {header}
      <div className="mx-auto max-w-2xl px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {countruyPreviews}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
