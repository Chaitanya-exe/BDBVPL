"use client";
import React from "react";
import Layout from "../components/layout";
import PieChart from "../components/pieChart";
import BarChart from "../components/barChart";
import LineChart from "../components/lineChart"
function Analytics() {
  return (
    <div className="px-10 bg-slate-100">
      <Layout>
        <h1 className="text-3xl font-bold mb-10">Analytics Section</h1>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6 shadow-lg">
            <PieChart />
            <div className=""><LineChart/></div> 
            </div>
          <div className="col-span-12 lg:col-span-6 shadow-lg"><BarChart /></div>
        </div> 
              
      </Layout>
    </div>
  );
}

export default Analytics;
