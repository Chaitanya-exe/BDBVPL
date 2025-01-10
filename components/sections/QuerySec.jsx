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
