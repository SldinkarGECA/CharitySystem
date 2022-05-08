import React, { useEffect, useState } from "react";
import charity from "../charity";
import ProjectCard from "./ProjectCard";

function CharityProjects(props) {
  const [charityProjects, setCharityProjects] = useState([]);

  useEffect(() => {
    const loadContractFunctions = async () => {
      setCharityProjects(await charity.methods.getBeneficiaries().call());
      console.log(charityProjects);
    };
    loadContractFunctions();
  }, [charityProjects, setCharityProjects]);
  return (
    <div className="row text-center">
      <div>
        <br />
        <h1 className="display 2">
          Explore the Charity projects posted on our site!
        </h1>
        <br />
      </div>
      {charityProjects.map((charityProject) => (
        <ProjectCard
          description={charityProject["description"]}
          title={charityProject["title"]}
          maxContr={charityProject["maxContr"]}
        />
      ))}
    </div>
  );
}

export default CharityProjects;
