"use client";
import React from "react";
import Button from "./Button";
// import catalog from "@p"

const pdfDownload = () => {
  const downloadPDF = () => {
    // Path to the PDF file in the 'images' folder within the 'public' folder
    const pdfUrl = "/images/example.pdf";

    // Create a temporary link element to trigger the download
    const link = document.createElement("a");
    link.href = "/images/catalogue.pdf";
    link.download = "bdbvplCatalogue.pdf"; // Name of the downloaded file
    link.click(); // Trigger the click to start the download
  };

  return (
    <div className="">
      <div className="min-h-[100px] flex justify-between items-center m-10 p-3 bg-black rounded-lg">
        <div className="text-white text-3xl">Download Our Company Catalogue from here</div>
        {/* <Button onClick={downloadPDF} text={"Download PDF"}></Button> */}
        <button className="bg-gradient-to-r from-green/90 px-5 text-white  to-softgreen shadow shadow-text/20 hover:bg-gradient-to-r hover:from-green hover:to-softgreen/90 hover:shadow-lg hover:shadow-text/30 capitalize  py-2 rounded " onClick={downloadPDF}>Download PDF</button>
      </div>
    </div>
  );
};

export default pdfDownload;
