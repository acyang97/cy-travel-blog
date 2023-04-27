"use client";
import { useWindowSize } from "@/hooks/useWindowSize";
import { geoPath, geoMercator } from "d3";
import Link from "next/link";
// https://github.com/rsuite/rsuite/issues/1953
import "rsuite/dist/rsuite-no-reset.min.css";
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
  // https://github.com/d3/d3-geo
  const projection = geoMercator().fitSize(
    [bestWidth * 0.95, bestWidth * 0.5],
    data
  );
  const path = geoPath(projection);

  return (
    <div className="flex items-center">
      <svg width={bestWidth * 0.95} height={bestWidth * 0.6}>
        <g className="marks">
          {data?.features?.map((feature: any) => {
            return (
              <Whisper
                followCursor
                speaker={<Tooltip>{feature.properties.name}</Tooltip>}
              >
                <path
                  className="path-visited-japan"
                  d={path(feature) as string}
                  fill={
                    feature.properties.visited === true ? "#ff4698" : "#cbd5e1"
                  }
                />
              </Whisper>
            );
          })}
        </g>
      </svg>
    </div>
  );
};
