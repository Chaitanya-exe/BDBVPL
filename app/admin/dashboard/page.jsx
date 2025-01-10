"use client";
import React from "react";
import Layout from "../layout";
import { Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Circle } from "rc-progress";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
const DashboardPanel = () => {
  const [data, setData] = useState([]);
  const [counts, setCount] = useState({
    installation: 0,
    maintanence: 0,
    consultation: 0,
    design: 0
  });
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('/api/query/get-all', {
          method: "GET"
        });
        if(!response.ok){
          throw new Error("some error occured");
        }

        const res = await response.json();
        setData(res.data);

        const categoryCount = res.data.reduce(
          (acc, item)=>{
            if(item.type === 'INSTALLATION') acc.installation++;
            if(item.type === 'DESIGN') acc.design++;
            if(item.type === 'CONSULTATION') acc.consultation++;
            if(item.type === 'MAINTANENCE') acc.maintanence++;
            return acc
          },
          {installation:0, maintanence:0, consultation:0, design:0})
        setCount(categoryCount);  

      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, [])

  const totalQueries = counts.installation + counts.consultation + counts.maintanence + counts.design;
  console.log(data)
  const cardData = [
    { title: "Total Queries", count: totalQueries, percent: 100 },
    { title: "Installation Query", count: counts.installation, percent: totalQueries ? (counts.installation / totalQueries) * 100 : 0 },
    { title: "Consultation Query", count: counts.consultation, percent: totalQueries ? (counts.consultation / totalQueries) * 100 : 0 },
    { title: "Maintenance Query", count: counts.maintanence, percent: totalQueries ? (counts.maintanence / totalQueries) * 100 : 0 },
    { title: "Design Query", count: counts.design, percent: totalQueries ? (counts.design / totalQueries) * 100 : 0 },
  ];

  return (
    <Layout>
      <div className="p-4">
        <Typography variant="h4" className="text-blue-800 font-bold mb-6">
          Dashboard Overview
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-start">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-transform duration-300 bg-sky-50 rounded-xl shadow-lg p-5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-4">
                <PeopleAltIcon fontSize="large" className="text-blue-600" />
                <Circle
                  percent={card.percent}
                  trailWidth={8}
                  strokeWidth={10}
                  trailColor="#b3a4f3"
                  strokeColor="green"
                  className="w-16 h-16"
                />
              </div>
              <div>
                <Typography
                  variant="h6"
                  className="text-blue-600 font-semibold"
                >
                  {card.title}
                </Typography>
                <Typography variant="h4" className="font-bold">
                  <CountUp delay={0.5} end={card.count} />
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPanel;