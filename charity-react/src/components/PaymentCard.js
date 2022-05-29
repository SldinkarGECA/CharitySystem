import React from "react";

function PaymentCard(props) {
  return (
    <div className="px-4 py-4 my-auto col-lg-12 col-sm-12 ">
      <div className="card  text-center bg-success ">
        <div className="card-header">
          <b>
            <h4>
              Payment description: {props.sender} donated {props.amount} to{" "}
              {props.description}
            </h4>
          </b>
        </div>
        <div className="card-body row ">
          <p className="card-text col-lg-3">Receiver: {props.receiver}</p>
          <p className="card-text col-lg-3">Sender: {props.sender}</p>
          <p className="card-text col-lg-3">Amount: {props.amount}</p>
          <p className="card-text col-lg-3 ">
            <b>PAYMENT SUCCESSFUL</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
