import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Views", "Querries"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

const options = {
  chart: {
    title: "Performance",
    subtitle: "Views and Query over the Years",
  },
};

function LineChart() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}

export default LineChart;