"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Layout from "../layout";


function Querries() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", { method: "GET" });
      const data = await response.json();
      if (data.ok) {
        alert(data.msg);
        router.push('/admin/login');
      }
    } catch (err) {
      alert("some error occured");
    }
  }
  return (
    <div>
      <Layout>
        <>
          <button onClick={handleLogout} className="bg-green rounded-lg w-[80px] text-white">Logout</button>
        </>
      </Layout>
    </div>
  );
}

export default Querries;
