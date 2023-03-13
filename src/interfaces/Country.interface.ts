export interface Country {
  name: string;
  year?: number;
  posts: string[];
  dialCode: string;
  visited: boolean;
  code?: string;
  continent: string;
}

export enum Continent {
  ALL = "All",
  AFRICA = "Africa",
  ASIA = "Asia",
  ANTARCTICA = "Antarctica",
  NORTH_AMERICA = "North America",
  SOUTH_AMERICA = "South America",
  OCEANIA = "Oceania",
  EUROPE = "Europe",
}
