"use client";
import { useState, useEffect } from "react";
import { feature } from "topojson";

export const useGetGeoJsonData = (mapData: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const { world } = mapData.objects;
    const geojsonData = feature(mapData as any, world as any);
    setData(geojsonData as any);
  }, []);

  return data;
};

export const useGetJapanGeoJsonData = (mapData: any) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const { prefectures } = mapData.objects;
    const geojsonData = feature(mapData as any, prefectures as any);
    setData(geojsonData as any);
  }, []);

  return data;
};
