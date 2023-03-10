import CountryPreview from "./CountryPreview";
import { countriesTravelledTo } from "@/constants/country.constants";
import Image from "next/image";
import HomePageHeaderImage from "../../public/images/HomePage/home-page-header.jpg";

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
          <p className="my-8 mx-3 leading-relaxed">
            A 26 year old Singaporean who loves travelling! I particularly enjoy
            solo travelling to off the beaten path destinations! I find that
            myself having the best experiences when I set off without a proper
            plan! Aside from travelling, I also enjoy bouldering, photography
            and football!
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
      <div className="mx-6 md:mx-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 content-center">
          {countruyPreviews}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
