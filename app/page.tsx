import D3WorldMap from "components/D3Map/D3WorldMap";
import HomePageHeader from "./HomePageHeader";
import LatestPosts from "./LatestPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | ChunTravels - Travel Blog",
  description:
    "A 26 year old Singaporean who loves traveling!I particularly enjoy solo traveling to off the beaten path destinations!",
};

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
        <LatestPosts />
      </div>
    </div>
  );
};

export default HomePage;
