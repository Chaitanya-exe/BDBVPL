"use client"
import React from 'react'
import Layout from "@/components/layout";
import { Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Line, Circle } from "rc-progress";
import CountUp from "react-countup";

const dashboardPanel = () => {
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="col-span-4 md:col-span-2 lg:col-span-1 hover:scale-105">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg">
              <div className="flex justify-between">
                <div className="ml-5 mt-5 p-2">
                  <PeopleAltIcon fontSize="large" />
                </div>
                <div className="ml-5 mt-5 p-2 roundProgress">
                  <Circle
                    percent={77}
                    trailWidth={8}
                    trailColor="#b3a4f3"
                    strokeWidth={10}
                    strokeColor="rgb(2,132,199)"
                    className="hover:scale-150"
                  />
                  {/* <h2>Progress Bar</h2> */}
                </div>
              </div>
              <div className="pl-7 py-5">
                <div className="text-blue-600 font-semibold">Total Views</div>
                <div className="text-3xl font-semibold">
                  <CountUp delay={0} end={1000} />
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-span-4 md:col-span-2 lg:col-span-1 hover:scale-105">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg">
              <div className="flex justify-between">
                <div className="ml-5 mt-5 p-2">
                  <PeopleAltIcon fontSize="large" />
                </div>
                <div className="ml-5 mt-5 p-2 roundProgress">
                  <Circle
                    percent={77}
                    trailWidth={8}
                    trailColor="#b3a4f3"
                    strokeWidth={10}
                    className="hover:scale-150"
                    strokeColor="rgb(2,132,199)"
                  />
                  {/* <h2>Progress Bar</h2> */}
                </div>
              </div>
              <div className="pl-7 py-5">
                <div className="text-blue-600 font-semibold">Total Users</div>
                <div className="text-3xl font-semibold">
                <CountUp delay={1} end={127} />
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-span-4 md:col-span-2 lg:col-span-1 hover:scale-105">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg">
              <div className="flex justify-between">
                <div className="ml-5 mt-5 p-2">
                  <PeopleAltIcon fontSize="large" />
                </div>
                <div className="ml-5 mt-5 p-2 roundProgress">
                  <Circle
                    percent={77}
                    trailWidth={8}
                    strokeWidth={10}
                    trailColor="#b3a4f3"
                    className="hover:scale-150"
                    strokeColor="rgb(2,132,199)"
                  />
                  {/* <h2>Progress Bar</h2> */}
                </div>
              </div>
              <div className="pl-7 py-5">
                <div className="text-blue-600 font-semibold">Total Users</div>
                <div className="text-3xl font-semibold">
                <CountUp delay={1} end={127} />
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="col-span-4 md:col-span-2 lg:col-span-1 hover:scale-105">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg">
              <div className="flex justify-between">
                <div className="ml-5 mt-5 p-2">
                  <PeopleAltIcon fontSize="large" />
                </div>
                <div className="ml-5 mt-5 p-2 roundProgress">
                  <Circle
                    percent={77}
                    trailWidth={8}
                    strokeWidth={10}
                    trailColor="#b3a4f3"
                    className="hover:scale-150"
                    strokeColor="rgb(2,132,199)"
                  />
                  {/* <h2>Progress Bar</h2> */}
                </div>
              </div>
              <div className="pl-7 py-5">
                <div className="text-blue-600 font-semibold">Total Users</div>
                <div className="text-3xl font-semibold">
                <CountUp delay={1} end={127} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default dashboardPanel
// import React from "react";

// function DashboardPanel() {
//   return <div>DashboardPanel</div>;
// }

// export default DashboardPanel;
