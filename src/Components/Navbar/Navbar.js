import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { Sidebar } from "../Sidebar/Sidebar";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md p-0">
        <Link
          className="navbar-brand p-0"
          to="/"
          style={{ fontSize: "26px", fontWeight: "600", color: "#fff" }}
        >
          School MS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Admin
                {/* <span>
                  <i className="fa-solid fa-user"></i>
                </span> */}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar />
    </div>
  );
};
