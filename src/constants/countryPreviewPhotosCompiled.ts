import { CountryPreviewPhotos } from "@/interfaces/Country.interface";
import { AlbaniaPreviewPhotos } from "./countryPhotos/albaniaPhotos";
import { CroatiaPreviewPhotos } from "./countryPhotos/croatiaPhotos";
import { HungaryPreviewPhotos } from "./countryPhotos/hungaryPhotos";
import { MaltaPreviewPhotos } from "./countryPhotos/maltaPhotos";
import { MontenegroPreviewPhotos } from "./countryPhotos/montenegroPhotos";
import { SwitzerlandPreviewPhotos } from "./countryPhotos/switzerlandPhotos";
import { UsaPreviewPhotos } from "./countryPhotos/usaPhotos";

export const countryPreviewPhotos: Map<String, CountryPreviewPhotos> = new Map([
  ["USA", UsaPreviewPhotos],
  ["Hungary", HungaryPreviewPhotos],
  ["Croatia", CroatiaPreviewPhotos],
  ["Switzerland", SwitzerlandPreviewPhotos],
  ["Montenegro", MontenegroPreviewPhotos],
  ["Malta", MaltaPreviewPhotos],
  ["Albania", AlbaniaPreviewPhotos],
]);
