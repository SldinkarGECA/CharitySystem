import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";

function Navbar(props) {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Genuine Charity
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse d-flex flex-row-reverse"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="">
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
            </nav>
            {props.children}
        </Router>
    );
}

export default Navbar;
