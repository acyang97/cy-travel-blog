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
  AFRICA = "Africa",
  ASIA = "Asia",
  ANTARCTICA = "Antarctica",
  NORTH_AMERICA = "NORTH AMERICA",
  SOUTH_AMERICA = "SOUTH AMERICA",
  OCEANIA = "OCEANIA",
  EUROPE = "EUROPE",
}
