import React from "react";
import "./Home.css";
function HomeCard(props) {
  return (
    <div className="px-4 py-4 my-auto col-lg-6 col-sm-12">
      <div className="card  text-left bg-light border border-dark rcorners">
        <div className="card-body">
          <p className="text-left text-success">{props.title}</p>
          <p className="text-left">{props.description}</p>
          <div class="d-grid d-sm-flex flex-row-reverse">
            <button
              type="button"
              className="btn btn-light btn-sm border border-dark rcorners"
              onClick={props.onClick}
            >
              {props.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
