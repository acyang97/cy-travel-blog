import { Metadata } from "next";
import DestinationsClient from "./DestinationsClient";

export const metadata: Metadata = {
  title: "Destinations | ChunTravels - Travel Blog",
  description: "Destinations of places that I have traveled to",
};

const DestinationPage = () => {
  return <DestinationsClient />;
};

export default DestinationPage;
