import React from "react";
function ProjectCard(props) {
  return (
    <div className="px-4 py-4 my-auto col-lg-4 col-sm-12">
      <div className="card  text-center bg-info ">
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.description}</p>
          <div class="d-grid d-md-flex justify-content-center">
            <button type="button" className="btn btn-success btn-lg ">
              Donate Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
