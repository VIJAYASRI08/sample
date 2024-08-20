import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { getData } from "./Radialdata";

const Radial = () => {
  const [options] = useState({
    data: getData(),
    title: {
      text: "Revenue by Product Category",
    },
    subtitle: {
      text: "Millions USD",
    },
    series: [
      {
        type: "radial-bar",
        radiusKey: "quarter",
        angleKey: "software",
        angleName: "Software",
        stacked: true,
      },
      {
        type: "radial-bar",
        radiusKey: "quarter",
        angleKey: "hardware",
        angleName: "Hardware",
        stacked: true,
      },
      {
        type: "radial-bar",
        radiusKey: "quarter",
        angleKey: "services",
        angleName: "Services",
        stacked: true,
      },
    ],
  });

  return (
    <div>
      <AgCharts 
        options={options}
        style={
          { width: "1000px", height: "700px" }
        }
      />
    </div>
  );
};

export default Radial;