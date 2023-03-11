"use client";
import { mapData } from "@/constants/mapData";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const AppMap = () => (
  <div>
    <ComposableMap height={500} width={1000}>
      <Geographies geography={mapData}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              stroke="black"
              strokeWidth={0.1}
              // true=amber-500, false=slate-300
              fill={geo.properties.visited === true ? "#eab308" : "#cbd5e1"}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>
);

export default AppMap;
