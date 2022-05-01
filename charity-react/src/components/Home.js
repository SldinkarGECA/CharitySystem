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
  });

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
    <div>
      <h1 className="display 2">Welcome !</h1>
      <h1>Manager is {manager}</h1>
      <h2>Address is {charity.options.address}</h2>
      <div className="d-flex justify-content-center">
        <HomeCard
          description="To show all the donors all the charity projects available and to let them choose and vote for the ones convincing and agreeging with them"
          title="For all the donours"
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
    </div>
  );
}

export default Home;
