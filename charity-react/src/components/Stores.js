import React, { useEffect, useState } from "react";
import charity from "../charity";
import StoreCard from "./StoreCard";

function Stores(props) {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const loadContractFunctions = async () => {
      setStores(await charity.methods.getCoOpStores().call());
      console.log(stores);
    };
    loadContractFunctions();
    const intervalId = setInterval(() => {
      loadContractFunctions();
    }, 1000 * 20); // in milliseconds
    return () => clearInterval(intervalId);
  }, [stores]);

  return (
    <div className="row text-center">
      <div>
        <br />
        <h1 className="display 2">
          Explore the Stores selling products on our platform
        </h1>
        <br />
      </div>
      {stores.map((prod) => (
        <StoreCard
          key={prod["StoreName"]}
          StoreName={prod["StoreName"]}
          StoreAddress={prod["StoreAddress"]}
        />
      ))}
    </div>
  );
}

export default Stores;
