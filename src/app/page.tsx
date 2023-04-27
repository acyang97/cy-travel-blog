"use client";
import D3WorldMap from "@/components/D3Map/D3WorldMap";
import HomePageHeader from "./HomePageHeader";

const HomePage = () => {
  return (
    <div>
      <HomePageHeader />
      <div className="mx-6 md:mx-12">
        <D3WorldMap />
      </div>
    </div>
  );
};

export default HomePage;
