"use client";

import { countriesTravelledTo } from "@/constants/country.constants";
import CountryPreview from "../CountryPreview";
import DestinationsPageHeader from "./DestinationsPageHeader";

const DestinationPage = () => {
  const countruyPreviews = countriesTravelledTo.map((country) => (
    <CountryPreview key={country.name} {...country} />
  ));
  return (
    <div>
      <div className="mx-6 md:mx-12 my-12">
        <DestinationsPageHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 content-center">
          {countruyPreviews}
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
