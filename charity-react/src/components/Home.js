import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import charity from "../charity";
import HomeCard from "./Homecard";

function Home(props) {
  const [manager, setManager] = useState("");

  useEffect(() => {
    const loadContractFunctions = async () => {
      let _manager = await charity.methods.manager().call();
      setManager(_manager);
      console.log(_manager);
    };
    loadContractFunctions();
    const intervalId = setInterval(() => {
      loadContractFunctions();
    }, 1000 * 20); // in milliseconds
    return () => clearInterval(intervalId);
  }, [manager]);

  const navigate = useNavigate();

  const projectsPage = () => {
    navigate("/CharityProjects");
  };
  const storePage = () => {
    navigate("/store");
  };
  const beneficiariesPage = () => {
    navigate("/beneficiaries");
  };

  return (
    <div className="text-center">
      <br />
      <h1 className="display 2">Welcome to Genuine Charity System !</h1>
      <br />
      <div className="d-flex justify-content-center">
        <HomeCard
          description="Know more about all the charity projects posted on our platform and join the great cause by donating them"
          title="For all the donors"
          button="Projects"
          onClick={projectsPage}
        />
      </div>
      <div className="d-flex justify-content-center">
        <HomeCard
          description="To shop and buy all the required necessities from the website itself in our very own co-operative stores"
          title="For the Necessary Commodities"
          button="Store"
          onClick={storePage}
        />
      </div>
      <div className="d-flex justify-content-center">
        <HomeCard
          description="To display the entire list of Beneficiaries who have registered on the website for help of any kind, needed on a daily basis"
          title="For all Beneficiaries info"
          button="Beneficiaries"
          onClick={beneficiariesPage}
        />
      </div>
      <h6>Manager is {manager}</h6>
      <h6>Address is {charity.options.address}</h6>
    </div>
  );
}

export default Home;
