import React, { useEffect, useState } from "react";
import charity from "../charity";
import ProjectCard from "./ProjectCard";
import CreateCharityProject from "./CreateCharityProject";

function CharityProjects(props) {
  const [charityProjects, setCharityProjects] = useState([]);

  useEffect(() => {
    const loadContractFunctions = async () => {
      setCharityProjects(await charity.methods.getBeneficiaries().call());
      // console.log(charityProjects);
    };
    loadContractFunctions();
  }, [charityProjects, setCharityProjects]);
  return (
    <div className="row text-center">
      <CreateCharityProject />
      <div>
        <br />
        <h1 className="display 2">
          Explore the Charity projects posted on our site!
        </h1>
        <br />
      </div>
      {charityProjects.map((charityProject, index) => (
        <ProjectCard
          key={index}
          index={index}
          description={charityProject["description"]}
          title={charityProject["title"]}
          maxContr={charityProject["maxContr"]}
          collectedAmount={charityProject["collectedAmount"]}
        />
      ))}
    </div>
  );
}

export default CharityProjects;
