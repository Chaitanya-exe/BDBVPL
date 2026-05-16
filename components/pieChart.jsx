import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

function PieChart() {
  const [counts, setCount] = useState({
    installation: 0,
    maintanence: 0,
    consultation: 0,
    design: 0
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/query/get-all", { method: "GET" });
        if (!response.ok) {
          throw new Error("some error occured");
        }
        const res = await response.json();

        const categoryCount = res.data.reduce(
          (acc, item) => {
            if (item.type === 'INSTALLATION') acc.installation++;
            if (item.type === 'DESIGN') acc.design++;
            if (item.type === 'CONSULTATION') acc.consultation++;
            if (item.type === 'MAINTANENCE') acc.maintanence++;
            return acc
          },
          { installation: 0, maintanence: 0, consultation: 0, design: 0 })
        setCount(categoryCount);
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, []);

  const data = [
    ["Type Of Querry", "Number"],
    ["Consultation", counts.consultation],
    ["Design", counts.design],
    ["Maintainance", counts.maintanence],
    ["Installation", counts.installation],
  ];

  const options = {
    title: "Querry Types",
  };

  return <Chart chartType="PieChart" width="100%" height="350px" data={data} options={options} />;
}

export default PieChart;
