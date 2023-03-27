import { CountryPreviewPhotos } from "@/interfaces/Country.interface";
import { UsaPreviewPhotos } from "./countryPreviewPhotosData";

export const countryPreviewPhotos: Map<String, CountryPreviewPhotos> = new Map([
  ["USA", UsaPreviewPhotos],
]);
