"use client";
import { geoJsonMapData } from "@/constants/worldMap.geojson";
import { useGetWorldGeoJsonData } from "@/hooks/useGetWorldGeoJsonData";
import _ from "lodash";
import React from "react";
import { Marks } from "./Marks";

const D3WorldMap = () => {
  const geojsonData = useGetWorldGeoJsonData();

  return <Marks data={geojsonData} />;
};

export default D3WorldMap;
