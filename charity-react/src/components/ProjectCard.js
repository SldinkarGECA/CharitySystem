import React from "react";
import DonateNow from "./DonateNow";
function ProjectCard(props) {
  return (
    <div className="px-4 py-4 my-auto col-lg-4 col-sm-12">
      <div className="card  text-center bg-info ">
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <br />
          <p className="card-text">{props.description}</p>
          <br />
          <h4 className="card-text">Amount Requested: {props.maxContr}</h4>
          <br />
          <h4 className="card-text">
            Amount Collected: {props.collectedAmount}
          </h4>
          <br />
          <DonateNow index={props.index} amountRequested={props.maxContr} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
