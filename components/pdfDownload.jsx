"use client";
import React from "react";
import Button from "./Button";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import DownloadIcon from "@mui/icons-material/Download";
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
      <div className="min-h-[100px] flex justify-between items-center m-10 bg-black rounded-lg text-[50px]">
        <div className="bg-solarYellow border-solarYellow border-2 rounded-lg p-3 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg  hover:shadow-text/50">
          <TextSnippetIcon fontSize={"inherit"} />
        </div>
        <div className="text-white text-3xl hidden md:block">
          Download Our Company Catalogue from here
        </div>
        {/* <Button onClick={downloadPDF} text={"Download PDF"}></Button> */}
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg  hover:shadow-text/50 lg:bg-solarYellow lg:text-black font-bold rounded-lg p-3 text-white bg-black border-solarYellow lg:border-2">
          <DownloadIcon fontSize={"large"} />
          <button
            className=" px-5 text-2xl capitalize  py-2 rounded "
            onClick={downloadPDF}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default pdfDownload;
