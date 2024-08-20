import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import { getData } from "./Statsdata";

const Stats = () => {
  const [options, setOptions] = useState({
    data: getData(),
    title: {
      text: "Range Area Markers and Labels",
    },
    seriesArea: {
      padding: {
        left: 30,
        right: 30,
      },
    },
    series: [
      {
        type: "range-area",
        xKey: "date",
        xName: "Date",
        yLowKey: "low",
        yHighKey: "high",
        marker: {
          size: 7,
        },
        label: {
          padding: 17,
          formatter: ({ itemId, value }) => {
            return `${itemId === "low" ? "L" : "H"}: ${value.toFixed(0)}`;
          },
        },
      },
    ],
  });

  return (
    <div>
        <AgCharts 
            options = {options} 
        />
    </div>
    );
};

export default Stats;