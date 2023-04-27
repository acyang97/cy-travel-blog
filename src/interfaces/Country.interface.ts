export interface Country {
  name: string;
  year?: number;
  posts: string[];
  dialCode: string;
  visited: boolean;
  percentageOfCountryVisited?: number;
  code?: string;
  continent: Continent;
  introduction?: string;
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

export interface CountryPreviewPhotos {
  name: string;
  previewPhotos: PreviewPhoto[];
}

export enum PhotoType {
  LANDSCAPE = "Landscape",
  PORTRAIT = "Portrait",
}

export interface PreviewPhoto {
  photoType?: PhotoType;
  photoUrl: string;
  photoCaption: string;
}
