import React from "react";

import { ResponsivePieCanvas } from "@nivo/pie";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsivePieCanvas = ({ data /* see data tab */ }) => (
  <ResponsivePieCanvas
    data={data}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    pixelRatio={2}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    colors={{ scheme: "paired" }}
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
