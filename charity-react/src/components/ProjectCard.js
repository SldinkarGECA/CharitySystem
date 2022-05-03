import React from "react";

function ProjectCard(props) {


    return (<div className="px-4 py-4 my-auto col-lg-4 col-sm-12">
            <div className="card  text-center bg-info ">
                <div className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <br/>
                    <p className="card-text">{props.description}</p>
                    <br/>
                    <h4 className="card-text">Amount Requested: {props.maxContr}</h4>
                    <br/>
                    <div className="d-grid d-md-flex justify-content-center">
                        <button type="button" className="btn btn-success btn-lg" disabled>
                            Donate Now!
                        </button>
                    </div>
                </div>
            </div>
            <div className="toast show">
                <div className="toast-header">
                    <strong className="me-auto">Toast Header</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast"></button>
                </div>
                <div className="toast-body">
                    <p>Some text inside the toast body</p>
                </div>
            </div>
        </div>

    );
}

export default ProjectCard;
