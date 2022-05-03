import React from "react";

function StoreCard(props) {
    return (
        <div className="px-4 py-4 my-auto col-lg-4 col-sm-12">
            <div className="card  text-center bg-success ">
                <div className="card-body">
                    <h4 className="card-text">Store Name: {props.StoreName}</h4>
                    <br/>
                    <p className="card-text">Our address is: {props.StoreAddress}</p>
                    <br/>
                    <div className="card-footer bg-transparent border-dark">
                        <p className="card-text">Please select our address while buying any product!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreCard;
