"use client";

import { countriesTravelledTo } from "@/constants/country.constants";
import { Continent } from "@/interfaces/Country.interface";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import CountryPreview from "./CountryPreview";
import DestinationsPageHeader from "./DestinationsPageHeader";

const DestinationPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedIndexStyles = (index: number) => {
    return index === selectedIndex
      ? "border-current text-cyan-500"
      : "border-transparent hover:text-cyan-500";
  };

  const countryPreviews = countriesTravelledTo.map((country) => (
    <CountryPreview key={country.name} {...country} />
  ));

  return (
    <div>
      <div className="mx-6 md:mx-12 my-12">
        <DestinationsPageHeader />
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={(index: number) => {
            setSelectedIndex(index);
          }}
        >
          <Tab.List className="flex border-b text-xs md:text-sm font-medium mb-5">
            <Tab
              className={`-mb-px border-b p-4 outline-none ${selectedIndexStyles(
                0
              )}`}
            >
              {Continent.ALL}
            </Tab>
            <Tab
              className={`-mb-px border-b p-4 outline-none ${selectedIndexStyles(
                1
              )}`}
            >
              {Continent.ASIA}
            </Tab>
            <Tab
              className={`-mb-px border-b p-4 outline-none ${selectedIndexStyles(
                2
              )}`}
            >
              {Continent.EUROPE}
            </Tab>
            <Tab
              className={`-mb-px border-b p-4 outline-none ${selectedIndexStyles(
                3
              )}`}
            >
              {Continent.NORTH_AMERICA}
            </Tab>
            <Tab
              className={`-mb-px border-b p-4 outline-none ${selectedIndexStyles(
                4
              )}`}
            >
              {Continent.OCEANIA}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 content-center">
                {countryPreviews}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 content-center">
                {[...countryPreviews].filter(
                  (countryPreview) =>
                    countryPreview.props.continent === Continent.ASIA
                )}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 content-center">
                {[...countryPreviews].filter(
                  (countryPreview) =>
                    countryPreview.props.continent === Continent.EUROPE
                )}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 content-center">
                {[...countryPreviews].filter(
                  (countryPreview) =>
                    countryPreview.props.continent === Continent.NORTH_AMERICA
                )}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 content-center">
                {[...countryPreviews].filter(
                  (countryPreview) =>
                    countryPreview.props.continent === Continent.OCEANIA
                )}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default DestinationPage;
