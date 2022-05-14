import React from "react";
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import CharityProjects from "./CharityProjects";
import Products from "./Products";
import Home from "./Home";
import Stores from "./Stores";
import Donors from "./Donors";

function Navbar(props) {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            Genuine Charity
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNavDropdown"
          >
            <div className="d-flex">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/CharityProjects">
                    Charity Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/stores">
                    Stores
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/donors">
                    Donors List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products Available
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {props.children}

      <Routes>
        <Route path="" element={<Home />} />
        <Route exact path="/CharityProjects" element={<CharityProjects />} />
        <Route exact path="/donors" element={<Donors />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/stores" element={<Stores />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
