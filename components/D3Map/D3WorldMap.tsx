"use client";
import { mapData } from "constants/mapData";
import { useGetGeoJsonData } from "hooks/useGetGeoJsonData";
import React from "react";
import { Marks } from "./Marks";

const D3WorldMap = () => {
  const geojsonData = useGetGeoJsonData(mapData);

  return <Marks data={geojsonData} key="D3WorldMap" />;
};

export default D3WorldMap;
