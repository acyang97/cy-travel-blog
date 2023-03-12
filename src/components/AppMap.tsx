"use client";
import { mapData } from "@/constants/mapData";
import _ from "lodash";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const AppMap = () => {
  return (
    <>
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
                  // true=yellow-500, false=slate-300
                  fill={geo.properties.visited ? "#eab308" : "#cbd5e1"}
                />
              ))
            }
          </Geographies>
          {/* {toolTipContent && (
            <text x="50%" y="50%" textAnchor="middle">
              {toolTipContent}
            </text>
          )}{" "} */}
        </ComposableMap>
      </div>
    </>
  );
};

export default AppMap;
