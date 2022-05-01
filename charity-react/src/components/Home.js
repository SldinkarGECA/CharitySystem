import React from "react";
import { useEffect, useState } from "react";
import charity from "../charity";
function Home(props) {
  const [manager, setManager] = useState("");

  useEffect(() => {
    const loadContractFunctions = async () => {
      let _manager = await charity.methods.manager().call();
      setManager(_manager);
      console.log(_manager);
    };
    loadContractFunctions();
  });
  return (
    <div>
      <h1 class="display-1">Display 1</h1>
      <h1>Manager is {manager}</h1>
      <h2>address is {charity.options.address}</h2>
    </div>
  );
}

export default Home;
