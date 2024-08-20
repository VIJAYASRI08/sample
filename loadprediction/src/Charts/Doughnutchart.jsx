import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { getData } from "./Doughnutdata.js  ";

const Doughnutchart = () => {
  const [options, setOptions] = useState({
    data: getData(),
    title: {
      text: "Portfolio Composition",
    },
    subtitle: {
      text: "Versus Previous Year",
    },
    series: [
      {
        type: "donut",
        title: {
          text: "Previous Year",
        },
        calloutLabelKey: "asset",
        legendItemKey: "asset",
        angleKey: "previousYear",
        outerRadiusRatio: 1,
        innerRadiusRatio: 0.9,
      },
      {
        type: "donut",
        title: {
          text: "Current Year",
        },
        legendItemKey: "asset",
        showInLegend: false,
        angleKey: "currentYear",
        outerRadiusRatio: 0.6,
        innerRadiusRatio: 0.2,
      },
    ],
  });

  return (
      <AgCharts 
        options={options} 
      />
  ) 
};

export default Doughnutchart;