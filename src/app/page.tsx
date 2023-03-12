"use client";
import AppMap from "@/components/AppMap";
import HomePageHeader from "./HomePageHeader";

const HomePage = () => {
  return (
    <div>
      <HomePageHeader />
      <div className="mx-6 md:mx-12">
        <AppMap />
      </div>
    </div>
  );
};

export default HomePage;
