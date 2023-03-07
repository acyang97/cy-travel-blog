import { countriesTravelledTo } from "@/app/country/countries";
import _ from "lodash";

export const checkIfCountryExist = (countryName: string): Boolean => {
  const countryNames = countriesTravelledTo.map((country) => country.name);
  return _.includes(countryNames, countryName);
};
