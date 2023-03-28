import { CountryPreviewPhotos } from "@/interfaces/Country.interface";
import { HungaryPreviewPhotos } from "./countryPhotos/hungaryPhotos";
import { UsaPreviewPhotos } from "./countryPhotos/usaPhotos";

export const countryPreviewPhotos: Map<String, CountryPreviewPhotos> = new Map([
  ["USA", UsaPreviewPhotos],
  ["Hungary", HungaryPreviewPhotos],
]);
