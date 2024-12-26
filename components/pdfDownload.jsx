// "use client";
// import React from "react";
// import Button from "./Button";
// import TextSnippetIcon from "@mui/icons-material/TextSnippet";
// import DownloadIcon from "@mui/icons-material/Download";
// // import catalog from "@p"

// const pdfDownload = () => {
//   const downloadPDF = () => {
//     // Path to the PDF file in the 'images' folder within the 'public' folder
//     const pdfUrl = "/images/example.pdf";

//     // Create a temporary link element to trigger the download
//     const link = document.createElement("a");
//     link.href = "/images/catalogue.pdf";
//     link.download = "bdbvplCatalogue.pdf"; // Name of the downloaded file
//     link.click(); // Trigger the click to start the download
//   };

//   return (
//     <div className="">
//       <div className="min-h-[100px] flex justify-between items-center m-10 bg-black rounded-lg text-[50px]">
//         <div className="bg-solarYellow border-solarYellow border-2 rounded-lg p-3 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg  hover:shadow-text/50">
//           <TextSnippetIcon fontSize={"inherit"} />
//         </div>
//         <div className="text-white text-3xl hidden md:block">
//           Download Our Company Catalogue from here
//         </div>
//         {/* <Button onClick={downloadPDF} text={"Download PDF"}></Button> */}
//         <div className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg  hover:shadow-text/50 lg:bg-solarYellow lg:text-black font-bold rounded-lg p-3 text-white bg-black border-solarYellow lg:border-2">
//           <DownloadIcon fontSize={"large"} />
//           <button
//             className=" px-5 text-2xl capitalize  py-2 rounded "
//             onClick={downloadPDF}
//           >
//             Download PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default pdfDownload;

"use client";
import React from "react";
import Button from "./Button";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import DownloadIcon from "@mui/icons-material/Download";

const PdfDownload = () => {
  const downloadPDF = () => {
    const pdfUrl = "/images/catalogue.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "bdbvplCatalogue.pdf";
    link.click();
  };

  return (
    <div className="flex justify-center items-center p-6" id="Broshure">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg shadow-lg rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 border border-gray-300">
        {/* Icon Section */}
        <div className="bg-solarYellow border-solarYellow border-2 rounded-full p-4 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-solarYellow/50">
          <TextSnippetIcon fontSize="large" className="text-black" />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left text-black text-lg md:text-2xl font-semibold">
          Download Our Company Catalogue from Here
        </div>

        {/* Download Button */}
        <div className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-solarYellow/50">
          {/* <div className="bg-solarYellow text-black font-bold rounded-full p-4 flex justify-center items-center"></div> */}
          <button
            onClick={downloadPDF}
            className="px-4 py-2 md:px-6 md:py-3 text-lg md:text-xl font-medium bg-solarYellow text-black rounded-lg transition-transform duration-300 ease-in-out hover:bg-green hover:text-white hover:scale-105"
          >
            Download PDF
            <DownloadIcon fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfDownload;
