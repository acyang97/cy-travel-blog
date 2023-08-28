"use client";
import { japanMapData } from "constants/Japan/japanMapData";
import { useGetJapanGeoJsonData } from "hooks/useGetGeoJsonData";
import React from "react";
import { Marks } from "./Marks";

const D3JapanMap = () => {
  const geojsonData = useGetJapanGeoJsonData(japanMapData);

  return <Marks data={geojsonData} key="D3JapanMap" />;
};

export default D3JapanMap;
