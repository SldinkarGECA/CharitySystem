import React from "react";
import "../css/Loader.css";

function Loader(props) {
  return (
    <div className="d-flex justify-content-center">
      <br />
      <br />
      <div className="progress">
        <div className="color"></div>
      </div>
    </div>
  );
}

export default Loader;
