import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Type Of Querry", "Number"],
  ["Consultation", 11],
  ["Design", 2],
  ["Maintainance", 2],
  ["Installation", 2],
  ["Others", 7],
];

// Optional
const options = {
  title: "Querry Tags",
};

function PieChart() {
  return <Chart chartType="PieChart" width="100%" height="350px" data={data} options={options} />;
}

export default PieChart;
