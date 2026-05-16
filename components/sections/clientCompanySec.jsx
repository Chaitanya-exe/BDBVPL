import React from "react";
import Conatiner from "../Conatiner";

const ClientCompanySec = ()=>{
    return(<>
        <Conatiner
        title={"About us"}
        h2={
          <span>
            At <Link href={"/aboutus"}>BDB Ventures Pvt. Ltd.</Link>, our mission is to make{" "}
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Solar_energy"
            >
              renewable solar energy
            </a>{" "}
            the standard for homes and businesses. We transform energy
            consumption with innovative and affordable solar solutions
            tailored to your needs.
          </span>
        }
        h1={
          <span>
            Powering a <span className="text-green">Greener, </span>
            Brighter Tomorrow
          </span>
        }
        textAllign={"text-center md:text-start"}
      />
    </>);
};

export default ClientCompanySec;