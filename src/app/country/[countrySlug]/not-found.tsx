import ScrollUp from "@/components/ScrollUp";

// TODO: Configure this page so user can go back to the list of countries
const CountryNotFound = () => {
  return (
    <div>
      <ScrollUp />
      <p>Uh oh! This country has not been travelled to!</p>
    </div>
  );
};

export default CountryNotFound;
