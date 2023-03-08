import { Country } from "@/interfaces/Country.interface";
import _ from "lodash";
import { countriesData } from "./countryData";

export const countriesTravelledTo: Country[] = _.filter([...countriesData], {
  visited: true,
});
