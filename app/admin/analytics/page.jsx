"use client";
import React from "react";
import Layout from "../layout";
import PieChart from "@/components/pieChart";
import BarChart from "@/components/barChart";
import LineChart from "@/components/lineChart";

function Analytics() {
  return (

      <div className="px-4 md:px-10 bg-slate-100">
        <Layout>
          <h1 className="text-3xl font-bold mb-10 text-center">
            Analytics Section
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section: Pie Chart and Line Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Query Distribution</h2>
              <PieChart />
              <h2 className="text-xl font-semibold mt-6 mb-4">
                Performance Over Time
              </h2>
              <LineChart />
            </div>

            {/* Right Section: Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">
                City-wise Query Population
              </h2>
              <BarChart />
            </div>
          </div>
        </Layout>
      </div>
  );
}

export default Analytics;

// "use client";
// import React from "react";
// import Layout from "../layout";
// import PieChart from "@/components/pieChart";
// import BarChart from "@/components/barChart";
// import LineChart from "@/components/lineChart"
// function Analytics() {
//   return (
//     <div className="px-10 bg-slate-100">
//       <Layout>
//         <h1 className="text-3xl font-bold mb-10">Analytics Section</h1>
//         <div className="grid grid-cols-12 gap-5">
//           <div className="col-span-12 lg:col-span-6 shadow-lg">
//             <PieChart />
//             <div className=""><LineChart/></div>
//             </div>
//           <div className="col-span-12 lg:col-span-6 shadow-lg"><BarChart /></div>
//         </div>

//       </Layout>
//     </div>
//   );
// }

// export default Analytics;
