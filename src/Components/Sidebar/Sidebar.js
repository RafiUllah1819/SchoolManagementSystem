import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Sidebar = () => {
  const [a, sa] = useState(false);

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li>
          <a
            data-toggle="collapse"
            href="#dashboard"
            aria-expanded="false"
            aria-controls="dashboard"
          >
            Dashboard
            <span className="icon">
              {" "}
              <i className="fa fa-angle-down"></i>
            </span>
          </a>
        </li>
        <div className="collapse" id="dashboard">
          <ul className="dropdown-container">
            <li>
              <Link to="/">Admin</Link>
            </li>
            <li>
              <Link to="/dashboard/students">Students</Link>
            </li>
            <li>
              <Link to="/dashboard/teachers">Teachers</Link>
            </li>
            <li>
              <Link to="/dashboard/parents">Parents</Link>
            </li>
          </ul>
        </div>

        <li>
          <a
            data-toggle="collapse"
            href="#collapseExample1"
            aria-expanded="false"
            aria-controls="collapseExample1"
          >
            Students
            <span className="icon">
              {" "}
              <i className="fa fa-angle-down"></i>
            </span>
          </a>
        </li>
        <div className="collapse" id="collapseExample1">
          <ul className="dropdown-container">
            <li>
              <Link to="/addstudent">Add Student</Link>
            </li>
            <li>
              <Link to="/totalstudents">Total Students</Link>
            </li>
            <li>
              <Link to="/studentdetail">Student Detail</Link>
            </li>
          </ul>
        </div>

        <li>
          <a
            data-toggle="collapse"
            href="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            Teachers
            <span className="icon">
              {" "}
              <i className="fa fa-angle-down"></i>
            </span>
          </a>
        </li>
        <div className="collapse" id="collapseExample2">
          <ul className="dropdown-container">
            <li>
              <Link to="/addteacher">Add Teacher</Link>
            </li>
            <li>
              <Link to="/teachers">Total Teacher</Link>
            </li>
          </ul>
        </div>
        <li>
          <Link to="#">Parents</Link>
        </li>
        <li>
          <Link to="#">Library</Link>
        </li>
        <li>
          <Link to="#">Accountant</Link>
        </li>
        <li>
          <a
            data-toggle="collapse"
            href="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Class
            <span className="icon">
              {" "}
              <i className="fa fa-angle-down"></i>
            </span>
          </a>
        </li>
        <div className="collapse" id="collapseExample">
          <ul className="dropdown-container">
            <li>
              <Link to="/addclass">Add Class</Link>
            </li>
            <li>
              <Link to="/classes">Total Classes</Link>
            </li>
          </ul>
        </div>
        <li>
          <Link to="#">Subject</Link>
        </li>
        <li>
          <Link to="#">Exam</Link>
        </li>
        <li>
          <Link to="#">Hostel</Link>
        </li>
        <li>
          <Link to="#">Message</Link>
        </li>
        <li>
          <Link to="#">Account</Link>
        </li>
      </ul>
    </div>
  );
};
