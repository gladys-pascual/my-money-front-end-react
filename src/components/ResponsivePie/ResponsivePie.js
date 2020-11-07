import React from "react";

import { ResponsivePie } from "@nivo/pie";

const MyResponsivePieCanvas = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    sortByValue={true}
    pixelRatio={2}
    innerRadius={0.4}
    padAngle={0.7}
    cornerRadius={3}
    colors={{ scheme: "pastel2" }}
    borderColor={{ from: "color", modifiers: [["darker", 0.6]] }}
    radialLabelsSkipAngle={10}
    radialLabelsTextXOffset={6}
    radialLabelsTextColor="#333333"
    radialLabelsLinkOffset={0}
    radialLabelsLinkDiagonalLength={16}
    radialLabelsLinkHorizontalLength={24}
    radialLabelsLinkStrokeWidth={1}
    radialLabelsLinkColor={{ from: "color" }}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor="#333333"
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default MyResponsivePieCanvas;
