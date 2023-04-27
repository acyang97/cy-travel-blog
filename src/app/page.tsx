"use client";
import D3WorldMap from "@/components/D3Map/D3WorldMap";
import HomePageHeader from "./HomePageHeader";

const HomePage = () => {
  return (
    <div>
      <HomePageHeader />
      <div className="mx-6 md:mx-12">
        <div className="flex items-center justify-center">
          <p>
            If a country is filled with a darker color, it means I've explored
            more of it. 😛
          </p>
        </div>
        <D3WorldMap />
      </div>
    </div>
  );
};

export default HomePage;
