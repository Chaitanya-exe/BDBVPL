import React from "react";
import Link from "next/link";
function Watermark() {
  return (
    <div className="flex justify-center">
      <div>
        <p className="text-slate-400 opacity-50">
          Website developed by{" "}
          <Link href={"http://www.itsolutionconsultancy.com/"}>
            IT Solutions & Consultancy
          </Link>
          {" "}
          and 
          {" "}
          <Link href={"https://www.linkedin.com/company/original-tertiary"}>
            OGT
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Watermark;
