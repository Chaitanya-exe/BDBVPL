import React,{useState, useEffect} from "react";
import { Chart } from "react-google-charts";

function LineChart() {
  const [chartData, setChartData] = useState([
    ["Month", "Queries"],
  ]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await fetch("/api/query/get-all");
        if(!response.ok){
          throw new Error("some error occured");
        }
        const res = await response.json();
        const data = res.data;
        const queryCounts = Array(12).fill(0);
        data.forEach((query)=>{
          const month = new Date(query.createdAt).getMonth();
          queryCounts[month]++;
        })

        const dat = [
          ["Month","Queries"],
          ["January", queryCounts[0]],
          ["February", queryCounts[1]],
          ["March", queryCounts[2]],
          ["April", queryCounts[3]],
          ["May", queryCounts[4]],
          ["June", queryCounts[5]],
          ["July", queryCounts[6]],
          ["August", queryCounts[7]],
          ["September", queryCounts[8]],
          ["October", queryCounts[9]],
          ["November", queryCounts[10]],
          ["December", queryCounts[11]],
        ];
        setChartData(dat)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  },[])

  
  
  const options = {
    chart: {
      title: "Performance",
      subtitle: "Views and Query over the Years",
    },
  };

  return (
    <Chart
      chartType="Line"
      width="100%"
      height="350px"
      data={chartData}
      options={options}
    />
  );
}

export default LineChart;