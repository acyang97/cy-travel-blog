"use client";
import CountryPreview from "./CountryPreview";
import { countriesTravelledTo } from "@/constants/country.constants";
import AppMap from "@/components/AppMap";
import HomePageHeader from "./HomePageHeader";
import { useState } from "react";

const HomePage = () => {
  const countruyPreviews = countriesTravelledTo.map((country) => (
    <CountryPreview key={country.name} {...country} />
  ));

  return (
    <div>
      <HomePageHeader />
      <div className="mx-6 md:mx-12">
        <AppMap />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 content-center">
          {countruyPreviews}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
