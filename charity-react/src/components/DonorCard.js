import React from "react";

function DonorCard(props) {
    return (
        <div className="px-4 py-4 my-auto col-lg-4 col-sm-12">
            <div className="card  text-center bg-success ">
                <div className="card-body">
                    <h4 className="card-text">Donor Name: {props.donatorName}</h4>
                    <br/>
                    <p className="card-text">{props.donatorMessage}</p>
                    <br/>
                    <p className="card-text">My address is: {props.donatorAddress}</p>
                    <br/>
                    <div className="card-footer bg-transparent border-dark">
                        <p className="card-text">Amount Donated : {props.donatedValue}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonorCard;
