"use client";
import { useState, useEffect } from "react";
import { feature } from "topojson";
import { mapData } from "@/constants/mapData";

export const useGetWorldGeoJsonData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const { world } = mapData.objects;
    const geojsonData = feature(mapData as any, world as any);
    setData(geojsonData as any);
  }, []);

  return data;
};
