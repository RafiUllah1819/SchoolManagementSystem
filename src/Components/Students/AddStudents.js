import React from "react";
import "./AddStudents.css";
import { Calender } from "./Calender";

export const AddStudents = () => {
  return (
    <div className="wrapper">
      <h4 className="my-4" style={{ color: "darkgoldenrod" }}>
        Student Admisson Form
      </h4>
      <div className="student-form">
        <div className="card">
          <div
            className="card-body"
            style={{ boxShadow: "0px 10px 20px 0px rgb(229 229 229 / 75%)" }}
          >
            <h4 className="my-4" style={{ color: "darkgray" }}>
              Add New Student
            </h4>
            <div className="row">
              <div className="col-md-3 form-group">
                <label htmlFor="">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">Last Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">Roll No</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">Father Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">Gender</label>
                <br></br>
                <select name="" id="">
                  <option className="gender" value="Please Select">
                    Please Select
                  </option>
                  <option className="gender" value="male">
                    Male
                  </option>
                  <option className="gender" value="female">
                    Female
                  </option>
                </select>
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">Class</label>
                <br></br>
                <select name="" id="">
                  <option className="category" value="Please Select ">
                    Please Select Class
                  </option>
                  <option className="category" value="">
                    Nursery
                  </option>
                  <option className="category" value="">
                    KG
                  </option>
                  <option className="category" value="">
                    1
                  </option>
                  <option className="category" value="">
                    2
                  </option>
                  <option className="category" value="">
                    3
                  </option>
                  <option className="category" value="">
                    4
                  </option>
                </select>
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">Section</label>
                <br></br>
                <select name="" id="">
                  <option className="gender" value="Please Select">
                    Please Select Section
                  </option>
                  <option value="">Juniour</option>
                  <option value="">Middle</option>
                  <option value="">High</option>
                </select>
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">Phone</label>
                <input type="number" className="form-control" />
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">Admission Id</label>
                <input type="number" className="form-control" />
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">Date of Birth</label>

                <Calender />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 form-group">
                <label htmlFor="">Short Bio</label>
                <br />
                <textarea name="" id="" cols="50" rows="6"></textarea>
              </div>
              <div
                className="col-md-7 form-group"
                style={{ marginTop: "30px" }}
              >
                <input
                  type="file"
                  className="form-control"
                  style={{ background: "transparent" }}
                />
              </div>
            </div>
            <button className="btn btn-warning text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
