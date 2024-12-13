"use client";
import React from "react";
import Layout from "../components/layout";
import QuerryList from "../components/querryList";

function Querries() {
  return (
    <div>
      <Layout>
        <>
          <h1 className="font-bold mb-4">Querries</h1>
          <QuerryList />
        </>
      </Layout>
    </div>
  );
}

export default Querries;
