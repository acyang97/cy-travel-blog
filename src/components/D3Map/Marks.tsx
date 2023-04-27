"use client";
import { useWindowSize } from "@/hooks/useWindowSize";
import { geoPath, geoEqualEarth } from "d3";
import Link from "next/link";
import { useState } from "react";

interface Props {
  data: any;
}

const getBestWidth = (width: number) => {
  if (width <= 480) {
    return 320;
  }
  if (width <= 768) {
    return 500;
  }
  if (width <= 1024) {
    return 768;
  }
  if (width <= 1224) {
    return 1024;
  }
  if (width <= 1824) {
    return 1224;
  }
  return 1824;
};

export const Marks = (props: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const { data } = props;
  const { width } = useWindowSize();
  const bestWidth = getBestWidth(width!);
  const projection = geoEqualEarth().fitSize(
    [bestWidth * 0.95, bestWidth * 0.5],
    data
  );
  const path = geoPath(projection);

  const handleOnMouseEnter = () => {
    setIsHovering(true);
  };

  const handleOnMouseLeave = () => {
    setIsHovering(true);
  };
  return (
    <div className="flex items-center">
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
                  <path
                    className="path-visited"
                    d={path(feature) as string}
                    fill={
                      feature.properties.visited === true
                        ? "#eab308"
                        : "#cbd5e1"
                    }
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                  />
                </Link>
              );
            }
            return (
              <path
                key={feature.properties.id}
                className="path-not-visited"
                d={path(feature) as string}
                fill="#cbd5e1"
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};
