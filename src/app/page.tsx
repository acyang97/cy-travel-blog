// import Image from 'next/image'
import { Inter } from "@next/font/google";
import { getPostMetadata } from "utils/getPostMetadata";
import { countriesTravelledTo } from "./country/countries";
import CountryPreview from "./CountryPreview";
import PostPreview from "./PostPreview";
// import styles from './page.module.css'
const inter = Inter({ subsets: ["latin"] });

const HomePage = () => {
  // I want to read all these posts
  const countruyPreviews = countriesTravelledTo.map((country) => (
    <CountryPreview key={country.name} {...country} />
  ));

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {countruyPreviews}
    </div>
  );
};

export default HomePage;
