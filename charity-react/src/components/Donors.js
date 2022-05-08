import React, { useEffect, useState } from "react";
import charity from "../charity";
import CreateDonator from "./CreateDonator";
import DonorCard from "./DonorCard";

function Donors(props) {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const loadContractFunctions = async () => {
      setDonors(await charity.methods.getDonators().call());
      // console.log("Donors: ",donors);
    };
    loadContractFunctions();
    // const intervalId = setInterval(() => {
    // loadContractFunctions();
    // }, 1000 * 20); // in milliseconds
    // return () => clearInterval(intervalId);
  }, [donors]);

  return (
    <div className="row text-center">
      <CreateDonator />
      <div>
        <br />
        <h1 className="display 2">Meet donators of our platform!</h1>
        <br />
      </div>
      {donors.map((prod) => (
        <DonorCard
          key={prod["donatorName"]}
          donatorName={prod["donatorName"]}
          donatorMessage={prod["donatorMessage"]}
          donatedValue={prod["donatedValue"]}
          donatorAddress={prod["donatorAddress"]}
        />
      ))}
    </div>
  );
}

export default Donors;
