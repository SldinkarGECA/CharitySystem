import React from "react";

function ProductCard(props) {
    return (
        <div className="px-4 py-4 my-auto col-lg-4 col-sm-12">
            <div className="card  text-center bg-success ">
                <div className="card-header">ProductID: {props.productId}</div>
                <div className="card-body">
                    <h4 className="card-text">{props.productName}</h4>
                    <p className="card-text">Price: {props.price}</p>
                    {/*<p className="card-text">Seller: {props.seller}</p>*/}
                    <div className="card-footer bg-transparent border-success">
                        <div className="d-grid d-md-flex justify-content-center">
                            <button type="button" className="btn btn-info btn-lg " disabled>
                                Buy Now!
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProductCard;
