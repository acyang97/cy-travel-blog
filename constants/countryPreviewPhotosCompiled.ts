import { CountryPreviewPhotos } from "interfaces/Country.interface";
import { AlbaniaPreviewPhotos } from "./countryPhotos/albaniaPhotos";
import { BosniaPreviewPhotos } from "./countryPhotos/bosniaPhotos";
import { CroatiaPreviewPhotos } from "./countryPhotos/croatiaPhotos";
import { CzechPreviewPhotos } from "./countryPhotos/czechPhotos";
import { HungaryPreviewPhotos } from "./countryPhotos/hungaryPhotos";
import { JapanPreviewPhotos } from "./countryPhotos/japanPhotos";
import { JordanPreviewPhotos } from "./countryPhotos/jordanPhotos";
import { MaltaPreviewPhotos } from "./countryPhotos/maltaPhotos";
import { MexicoPreviewPhotos } from "./countryPhotos/mexicoPhotos";
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
  ["Bosnia-and-Herzegovina", BosniaPreviewPhotos],
  ["Czech-Republic", CzechPreviewPhotos],
  ["Mexico", MexicoPreviewPhotos],
  ["Jordan", JordanPreviewPhotos],
  ["Japan", JapanPreviewPhotos],
]);
