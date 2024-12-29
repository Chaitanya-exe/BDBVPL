"use client";
import React from "react";
import Layout from "../layout";
import { Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Circle } from "rc-progress";
import CountUp from "react-countup";

const DashboardPanel = () => {
  const cardData = [
    { title: "Total Views", count: 1000, percent: 100 },
    { title: "Total Querries", count: 300, percent: 30 },
    { title: "Installation Query", count: 100, percent: 33.3 },
    { title: "Consultation Query", count: 50, percent: 33.3/2 },
    { title: "Maintenance Query", count: 100, percent: 33.3 },
    { title: "Design Query", count: 50, percent: 33.3/2 },
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

// "use client";
// import React from "react";
// import Layout from "../layout";
// import { Typography } from "@mui/material";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import { Line, Circle } from "rc-progress";
// import CountUp from "react-countup";

// const dashboardPanel = () => {
//   return (
//     <div>
//       <Layout>
//         <div className="grid grid-cols-2 gap-6">
//           <div className="col-span-1 md:col-span-1 lg:col-span-1 hover:scale-105">
//             <div className="mx-auto bg-sky-50 rounded-xl shadow-lg">
//               <div className="flex justify-between">
//                 <div className="ml-5 mt-5 p-2">
//                   <PeopleAltIcon fontSize="large" />
//                 </div>
//                 <div className="ml-5 mt-5 p-2 roundProgress">
//                   <Circle
//                     percent={77}
//                     trailWidth={8}
//                     trailColor="#b3a4f3"
//                     strokeWidth={10}
//                     strokeColor="rgb(2,132,199)"
//                     className="hover:scale-150"
//                   />
//                   {/* <h2>Progress Bar</h2> */}
//                 </div>
//               </div>
//               <div className="pl-7 py-5">
//                 <div className="text-blue-600 font-semibold">Total Views</div>
//                 <div className="text-3xl font-semibold">
//                   <CountUp delay={0} end={1000} />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Card 2 */}
//           <div className="col-span-1 md:col-span-1 lg:col-span-1 hover:scale-105">
//             <div className="mx-auto bg-sky-50 rounded-xl shadow-lg">
//               <div className="flex justify-between">
//                 <div className="ml-5 mt-5 p-2">
//                   <PeopleAltIcon fontSize="large" />
//                 </div>
//                 <div className="ml-5 mt-5 p-2 roundProgress">
//                   <Circle
//                     percent={77}
//                     trailWidth={8}
//                     trailColor="#b3a4f3"
//                     strokeWidth={10}
//                     strokeColor="rgb(2,132,199)"
//                     className="hover:scale-150"
//                   />
//                   {/* <h2>Progress Bar</h2> */}
//                 </div>
//               </div>
//               <div className="pl-7 py-5">
//                 <div className="text-blue-600 font-semibold">
//                   Total Querries
//                 </div>
//                 <div className="text-3xl font-semibold">
//                   <CountUp delay={0} end={1000} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-4 gap-6">
//           {/* Card 1 */}
//           <div className="col-span-4 md:col-span-2 lg:col-span-1 hover:scale-105">
//             <div className="mx-auto bg-sky-50 rounded-xl shadow-lg">
//               <div className="flex justify-between">
//                 <div className="ml-5 mt-5 p-2">
//                   <PeopleAltIcon fontSize="large" />
//                 </div>
//                 <div className="ml-5 mt-5 p-2 roundProgress">
//                   <Circle
//                     percent={77}
//                     trailWidth={8}
//                     trailColor="#b3a4f3"
//                     strokeWidth={10}
//                     strokeColor="rgb(2,132,199)"
//                     className="hover:scale-150"
//                   />
//                   {/* <h2>Progress Bar</h2> */}
//                 </div>
//               </div>
//               <div className="pl-7 py-5">
//                 <div className="text-blue-600 font-semibold">
//                   Maintainance Query
//                 </div>
//                 <div className="text-3xl font-semibold">
//                   <CountUp delay={0} end={1000} />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Card 2 */}
//           <div className="col-span-4 md:col-span-2 lg:col-span-1 hover:scale-105">
//             <div className="mx-auto bg-sky-50 rounded-xl shadow-lg">
//               <div className="flex justify-between">
//                 <div className="ml-5 mt-5 p-2">
//                   <PeopleAltIcon fontSize="large" />
//                 </div>
//                 <div className="ml-5 mt-5 p-2 roundProgress">
//                   <Circle
//                     percent={77}
//                     trailWidth={8}
//                     trailColor="#b3a4f3"
//                     strokeWidth={10}
//                     className="hover:scale-150"
//                     strokeColor="rgb(2,132,199)"
//                   />
//                   {/* <h2>Progress Bar</h2> */}
//                 </div>
//               </div>
//               <div className="pl-7 py-5">
//                 <div className="text-blue-600 font-semibold">Design Query</div>
//                 <div className="text-3xl font-semibold">
//                   <CountUp delay={1} end={127} />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Card 3 */}
//           <div className="col-span-4 md:col-span-2 lg:col-span-1 hover:scale-105">
//             <div className="mx-auto bg-sky-50 rounded-xl shadow-lg">
//               <div className="flex justify-between">
//                 <div className="ml-5 mt-5 p-2">
//                   <PeopleAltIcon fontSize="large" />
//                 </div>
//                 <div className="ml-5 mt-5 p-2 roundProgress">
//                   <Circle
//                     percent={77}
//                     trailWidth={8}
//                     strokeWidth={10}
//                     trailColor="#b3a4f3"
//                     className="hover:scale-150"
//                     strokeColor="rgb(2,132,199)"
//                   />
//                   {/* <h2>Progress Bar</h2> */}
//                 </div>
//               </div>
//               <div className="pl-7 py-5">
//                 <div className="text-blue-600 font-semibold">
//                   Installation Query
//                 </div>
//                 <div className="text-3xl font-semibold">
//                   <CountUp delay={1} end={127} />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Card 4 */}
//           <div className="col-span-4 md:col-span-2 lg:col-span-1 hover:scale-105">
//             <div className="mx-auto bg-sky-50 rounded-xl shadow-lg">
//               <div className="flex justify-between">
//                 <div className="ml-5 mt-5 p-2">
//                   <PeopleAltIcon fontSize="large" />
//                 </div>
//                 <div className="ml-5 mt-5 p-2 roundProgress">
//                   <Circle
//                     percent={77}
//                     trailWidth={8}
//                     strokeWidth={10}
//                     trailColor="#b3a4f3"
//                     className="hover:scale-150"
//                     strokeColor="rgb(2,132,199)"
//                   />
//                   {/* <h2>Progress Bar</h2> */}
//                 </div>
//               </div>
//               <div className="pl-7 py-5">
//                 <div className="text-blue-600 font-semibold">
//                   Consultation Query
//                 </div>
//                 <div className="text-3xl font-semibold">
//                   <CountUp delay={1} end={127} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </div>
//   );
// };

// export default dashboardPanel;
