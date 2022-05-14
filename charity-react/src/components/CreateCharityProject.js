import React, { useState } from "react";
import charity from "../charity";

function CreateCharityProject(props) {
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
    await charity.methods
      .createRequest(
        inputs["_donatorTitle"],
        inputs["_donatorMessage"],
        inputs["_donatorAmount"]
      )
      .send({ from: manager, gas: "6721975" });
    alert("Added successfully");
  };

  return (
    <div className="row justify-content-center">
      <form onSubmit={handleSubmit} className="col-sm-12 col-lg-6">
        <br />
        <br />
        <h3>Add your Request here:</h3>
        <div className="form-group">
          <label>Title:</label>
          <br />
          <input
            type="text"
            className="form-control"
            name="_donatorTitle"
            value={inputs._donatorTitle || ""}
            onChange={handleChange}
            placeholder="Enter your Title"
          />
          <br />
        </div>
        <div className="form-group" onSubmit={handleSubmit}>
          <label>Description:</label>
          <br />
          <input
            type="text"
            className="form-control"
            name="_donatorMessage"
            value={inputs._donatorMessage || ""}
            onChange={handleChange}
            placeholder="Enter Description..."
          />
        </div>
        <br />
        <div className="form-group" onSubmit={handleSubmit}>
          <label>maxContr:</label>
          <br />
          <input
            type="text"
            className="form-control"
            name="_donatorAmount"
            value={inputs._donatorAmount || ""}
            onChange={handleChange}
            placeholder="Enter Amount"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Create Request
        </button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default CreateCharityProject;
