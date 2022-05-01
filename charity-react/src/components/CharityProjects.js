import React from "react";
import { useEffect, useState } from "react";
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
  });
  return (
    <div className="row">
      {charityProjects.map((charityProject) => (
        <ProjectCard
          description={charityProject["description"]}
          title={charityProject["title"]}
        />
      ))}
    </div>
  );
}

export default CharityProjects;
