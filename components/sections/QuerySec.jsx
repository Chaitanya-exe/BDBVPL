// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Conatiner from "../Conatiner";
// import { FaPhone, FaUser } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import Button from "../Button";

// const QuerySec = () => {
//   const [query, setQuery] = useState({
//     name: "",
//     number: "",
//     email: "",
//     type: "",
//     userQuery: "",
//   });

//   const handleClick = async () => {
//     try {
//       const response = await fetch("api/query/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ ...query })
//       });
//       const data = await response.json();
//       if (data.success) {
//         alert(data.msg)
//       }
//     } catch (err) {
//       alert("some error occured, Try again later")
//     }
//   };
//   return (
//     <div id="HomeQuery" className="relative flex justify-end lg:px-24  my-4">
//       <Image
//         src={"/icons/queryillus.svg"}
//         width={120}
//         height={112}
//         alt=""
//         className="absolute md:w-[300px] -right-3 md:left-28 md:top-4 -top-14 z-10"
//       />
//       <Image
//         src={"/images/queryimg.png"}
//         width={210}
//         height={265}
//         alt=""
//         className="absolute -left-8 md:left-0 lg:-bottom-6 md:w-[580px]  -bottom-6 -z-10"
//       />

//       <form
//         className={`*:my-2 md:max-w-[1000px] *:bg-[#FAFAFA`}
//       >
//         <Conatiner
//           title={"Query section"}
//           h1={"Got Questions? We’re Here to Help You Go Solar!"}
//           textAllign={"text-center px-20"}
//         />
//         <div className="md:flex items-center px-10 md:px-28 *:my-2 *:md:my-0 *:w-full gap-4 *:border *:rounded *:flex *:items-center *:p-2.5 *:gap-2 *:border-text/20 ">
//           <div className="focus-within:border-text/50">
//             <FaUser className="size-5 text-text/90" />
//             <input
//               type="text"
//               id="fullname"
//               name="fullName"
//               value={query.name}
//               onChange={(e) => setQuery({ ...query, name: e.target.value })}
//               placeholder="Full Name"
//               className="capitalize w-full outline-none bg-transparent px-2"
//             />
//           </div>
//           <div className="focus-within:border-text/50">
//             <FaPhone className="size-5 text-text/90" />
//             <input
//               type="text"
//               id="ph"
//               name="ph"
//               value={query.number}
//               onChange={(e) => setQuery({ ...query, number: e.target.value })}
//               placeholder="Phone Number"
//               className="w-full outline-none bg-transparent px-2"
//             />
//           </div>
//         </div>
//         <div className="md:flex items-center px-10 md:px-28 *:my-2 *:md:my-0 *:w-full gap-4 *:border *:rounded *:flex *:items-center  *:gap-2 *:border-text/20 ">
//           <div className="p-2.5 focus-within:border-text/50 ">
//             <MdEmail className="size-6 text-text/90" />
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={query.email}
//               onChange={(e) => setQuery({ ...query, email: e.target.value })}
//               placeholder="Email"
//               className="w-full outline-none bg-transparent px-2"
//             />
//           </div>

//           <div className="focus-within:border-text/50">
//             <select
//               onChange={(e) => {
//                 console.log(query)
//                 setQuery({ ...query, type: e.target.value.toUpper() })
//               }}
//               name="dropdown"
//               defaultValue=""
//               className="w-full capitalize bg-transparent p-2.5 h-full focus:outline-none"
//             >
//               <option
//                 value={query.type}
//                 onChange={(e) => {
//                   console.log(query)
//                   setQuery({ ...query, type: e.target.value.toUpper() })
//                 }}
//                 disabled
//                 hidden
//               >
//                 Type of inquiry
//               </option>
//               <option value="consultation" className="bg-white">
//                 Consultation
//               </option>
//               <option value="design" className="bg-white">
//                 Design
//               </option>
//               <option value="maintanence" className="bg-white">
//                 Maintanence
//               </option>
//               <option value="installation" className="bg-white">
//                 Installation
//               </option>
//               <option value="other" className="bg-white">
//                 Other
//               </option>
//             </select>
//           </div>
//         </div>
//         <div className="border backdrop-blur-md rounded mx-10 md:mx-28 flex items-center p-2 gap-2 border-text/20 focus-within:border-text/50">
//           <textarea
//             rows={5}
//             id="query"
//             name="query"
//             value={query.userQuery}
//             onChange={(e) => {
//               setQuery({ ...query, userQuery: e.target.value });
//             }}
//             placeholder="Tell us more about your needs or questions.."
//             className="w-full  outline-none bg-transparent px-2"
//           />
//         </div>
//         <div className="float-right md:py-3 py-2  px-10 md:px-28">
//           <Button
//             text={"Send Query"}
//             handleClick={(e) => {
//               e.preventDefault();
//               handleClick();
//             }}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default QuerySec;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Conatiner from "../Conatiner";
import { FaPhone, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Button from "../Button";

const QuerySec = () => {
  const [query, setQuery] = useState({
    name: "",
    number: "",
    email: "",
    type: "",
    userQuery: "",
  });

  const handleClick = async () => {
    try {
      const response = await fetch("/api/query/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...query }),
      });
      const data = await response.json();
      if (data.success) {
        alert(data.msg);
      }
    } catch (err) {
      alert("Some error occurred, please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      id="HomeQuery"
      className="relative flex justify-center my-4 px-4 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Images */}
      <Image
        src="/icons/queryillus.svg"
        width={300}
        height={300}
        alt="Illustration"
        className="absolute -top-10 md:top-0 right-0 md:left-10 z-10"
      />
      <Image
        src="/images/queryimg.png"
        width={580}
        height={400}
        alt="Query"
        className="absolute bottom-0 -left-20 md:left-0 -z-10 hidden md:block"
      />

      {/* Query Form */}
      <form className="bg-white/80 backdrop-blur-lg p-6 md:p-10 rounded-lg shadow-lg w-full max-w-3xl space-y-4 relative z-20">
        <Conatiner
          title="Query Section"
          h1="Got Questions? We’re Here to Help You Go Solar!"
          textAllign="text-center"
        />

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center border rounded-md p-2 focus-within:border-teal-500">
            <FaUser className="text-gray-500 size-5 mr-2" />
            <input
              type="text"
              name="name"
              value={query.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center border rounded-md p-2 focus-within:border-teal-500">
            <FaPhone className="text-gray-500 size-5 mr-2" />
            <input
              type="text"
              name="number"
              value={query.number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center border rounded-md p-2 focus-within:border-teal-500 col-span-1 md:col-span-2">
            <MdEmail className="text-gray-500 size-5 mr-2" />
            <input
              type="email"
              name="email"
              value={query.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full outline-none bg-transparent"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <select
              name="type"
              value={query.type}
              onChange={handleChange}
              className="w-full border rounded-md p-2 outline-none bg-transparent"
            >
              <option value="" disabled hidden>
                Type of Inquiry
              </option>
              <option value="consultation">Consultation</option>
              <option value="design">Design</option>
              <option value="maintenance">Maintenance</option>
              <option value="installation">Installation</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Text Area */}
        <div className="border rounded-md p-2 focus-within:border-teal-500">
          <textarea
            name="userQuery"
            rows={4}
            value={query.userQuery}
            onChange={handleChange}
            placeholder="Tell us more about your needs or questions.."
            className="w-full outline-none bg-transparent resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <Button
            text="Send Query"
            handleClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default QuerySec;
