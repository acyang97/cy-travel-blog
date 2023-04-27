"use client";
import { useWindowSize } from "@/hooks/useWindowSize";
import { geoPath, geoEqualEarth } from "d3";
import Link from "next/link";
import { useState } from "react";
import "rsuite/dist/rsuite.min.css";
import { Tooltip, Whisper } from "rsuite";

interface Props {
  data: any;
}

const getBestWidth = (width: number | undefined): number => {
  if (width === undefined) {
    return 500;
  }
  if (width <= 480) {
    return 320;
  }
  if (width <= 768) {
    return 500;
  }
  return width;
};

export const Marks = (props: Props) => {
  const { data } = props;
  const { width } = useWindowSize();
  const bestWidth = getBestWidth(width);
  const projection = geoEqualEarth().fitSize(
    [bestWidth * 0.95, bestWidth * 0.5],
    data
  );
  const path = geoPath(projection);

  return (
    <div className="flex items-center">
      <div
        id="tooltip-default"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Tooltip content
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      <svg width={bestWidth * 0.95} height={bestWidth * 0.6}>
        <g className="marks">
          {data?.features?.map((feature: any) => {
            if (feature.properties.visited) {
              return (
                <Link
                  key={feature.properties.id}
                  href={`/destinations/${feature.properties.formattedName}`}
                  role="link"
                >
                  <Whisper
                    followCursor
                    speaker={<Tooltip>{feature.properties.name}</Tooltip>}
                  >
                    <path
                      className="path-visited"
                      d={path(feature) as string}
                      fill={
                        feature.properties.visited === true
                          ? "#eab308"
                          : "#cbd5e1"
                      }
                    />
                  </Whisper>
                </Link>
              );
            }
            return (
              <Whisper
                followCursor
                speaker={<Tooltip>{feature.properties.name}</Tooltip>}
                key={feature.properties.id}
              >
                <path
                  className="path-not-visited"
                  d={path(feature) as string}
                  fill="#cbd5e1"
                />
              </Whisper>
            );
          })}
        </g>
      </svg>
    </div>
  );
};
