import React, { useState } from "react";
import charity from "../charity";

function CreateDonator(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const description = event.target.value;
    setInputs((values) => ({ ...values, [name]: description }));
  };

  const handleSubmit = async (event) => {
    let manager = await charity.methods.manager().call();
    for (const key of Object.keys(inputs)) {
      console.log(key, " : ", inputs[key]);
    }
    event.preventDefault();
    console.log(inputs);
    await charity.methods
      .create_donator(inputs["_donatorName"], inputs["_donatorMessage"])
      .send({ from: manager, gas: "6721975" });
  };

  return (
    <div className="row justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="col-sm-12 col-lg-6"
      >
        <br />
        <br />
        <h3>Become A Donator on our platform!</h3>
        <div className="form-group">
          <label>Name:</label>
          <br />
          <input
            type="text"
            className="form-control"
            name="_donatorName"
            value={inputs._donatorName || ""}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <br />
        </div>
        <div className="form-group" onSubmit={handleSubmit}>
          <label>About Yourself:</label>
          <br />
          <input
            type="text"
            className="form-control"
            name="_donatorMessage"
            value={inputs._donatorMessage || ""}
            onChange={handleChange}
            placeholder="Enter about yourselves.."
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Become Donator
        </button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default CreateDonator;
