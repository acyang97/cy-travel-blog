import { countriesTravelledTo } from "@/constants/country.constants";
import { Country } from "@/interfaces/Country.interface";
import _ from "lodash";

export const checkIfCountryExist = (countryName: string): Boolean => {
  const countryNames = countriesTravelledTo.map((country) => country.name);
  return _.includes(countryNames, countryName);
};

export const checkIfCountryExistHasPost = (countryName: string): Boolean => {
  const country = _.find(countriesTravelledTo, { name: countryName });
  return country?.posts.length !== 0;
};

export interface checkIfPostExistByCountryOutput {
  countryNameExist: Boolean;
  postNameExist: Boolean;
}

export const checkIfPostExistByCountry = (
  countryName: string,
  postName: string
): checkIfPostExistByCountryOutput => {
  const country = _.find(countriesTravelledTo, { name: countryName });
  const countryNameExist = !_.isNil(country);
  const postNameExist = _.includes(country?.posts, postName);
  return {
    countryNameExist,
    postNameExist,
  };
};

export const getCountry = (countryName: string): Country | undefined => {
  return _.find(countriesTravelledTo, { name: countryName });
};
