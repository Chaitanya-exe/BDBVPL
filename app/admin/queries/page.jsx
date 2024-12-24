"use client";
import React from "react";
import { useState, useEffect } from "react";
import Layout from "../layout";
import QuerryList from "@/components/querryList";

function Querries() {
  const [data, setData] = useState([]);
  let date = new Date(Date.now());
  date = date.toISOString();
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await fetch(`/api/query?date=${date}`,{method:"GET"});
        const resData = await response.json();
        console.log(resData)
        setData(resData.data)
      } catch (err) {
        alert("Error fetching users")
      }      
    }
    fetchData();
  },[])
  console.log(data)
  return (
    <div>
      <Layout>
        <>
          <h1 className="font-bold mb-4">Querries</h1>
          <QuerryList rows={data}/>
        </>
      </Layout>
    </div>
  );
}

export default Querries;
