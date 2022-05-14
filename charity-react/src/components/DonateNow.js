import React, { useState } from "react";
import charity from "../charity";

function DonateNow(props) {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const description = event.target.value;
    setInputs((values) => ({ ...values, [name]: description }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let manager = await charity.methods.manager().call();
    for (const key of Object.keys(inputs)) {
      console.log(key, " : ", inputs[key]);
    }
    console.log(inputs);
    console.log(props.amountRequested);
    let amountRequested = parseInt(props.amountRequested);
    let amountDonated = parseInt(inputs["amount"]);
    await charity.methods
      .make_donations(props.index, inputs["amount"])
      .send({ from: manager, gas: "6721975" }, (err, val) => {
        console.log("err ", err);
        console.log("val ", val);
      });
    let alertMessage = "";
    if (amountRequested >= amountDonated) {
      alertMessage = "Amount Donated Successfully";
    } else {
      alertMessage = "Amount is greater than requested amount";
    }
    alert(alertMessage);
  };

  return (
    <div className="row justify-content-center">
      <form onSubmit={handleSubmit} className="col-sm-12 col-lg-10">
        <div className="form-group">
          <label>Enter Amount:</label>
          <br />
          <input
            type="text"
            className="form-control"
            name="amount"
            value={inputs.amount || ""}
            onChange={handleChange}
            placeholder="Enter donation amount"
          />
          <br />
        </div>
        <button type="submit" className="btn btn-primary">
          Donate
        </button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default DonateNow;
