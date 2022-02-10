import React from "react";
import "./AddStudents.css";

export const TotalStudents = () => {
  return (
    <div className="wrapper">
      <div className="student-form">
        <div className="card">
          <div className="card-body">
            <h4 className="my-4" style={{ color: "darkgray" }}>
              {" "}
              Total students
            </h4>
            <div className="row no-gutters">
              <div className="col-md-3 form-group px-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Roll ..."
                />
              </div>
              <div className="col-md-4 form-group px-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Name ..."
                />
              </div>
              <div className="col-md-4 form-group px-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Class ..."
                />
              </div>
              <div className="col-md-1">
                <button
                  className="btn btn-warning"
                  style={{ width: "80px", height: "50px", color: "white" }}
                >
                  Search
                </button>
              </div>
            </div>

            <table
              className="table table-striped"
              style={{ marginTop: "30px" }}
            >
              <thead>
                <tr>
                  <th scope="col">Roll No</th>
                  <th scope="col">Admisson No</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Section</th>
                  <th scope="col">Parents</th>
                  <th scope="col">Address</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>#100001</td>
                  <td>
                    <i className="fa fa-user" style={{ fontSize: "24px" }}></i>
                  </td>
                  <td>Khan</td>
                  <td>Male</td>
                  <td>A</td>
                  <td>Ahmad</td>
                  <td>Islamabad</td>
                  <td>7 Sep, 2009</td>
                  <td>034543657676</td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>#100001</td>
                  <td>
                    <i className="fa fa-user" style={{ fontSize: "24px" }}></i>
                  </td>
                  <td>Khan</td>
                  <td>Male</td>
                  <td>A</td>
                  <td>Ahmad</td>
                  <td>Islamabad</td>
                  <td>7 Sep, 2009</td>
                  <td>034543657676</td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>#100001</td>
                  <td>
                    <i className="fa fa-user" style={{ fontSize: "24px" }}></i>
                  </td>
                  <td>Khan</td>
                  <td>Male</td>
                  <td>A</td>
                  <td>Ahmad</td>
                  <td>Islamabad</td>
                  <td>7 Sep, 2009</td>
                  <td>034543657676</td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>#100001</td>
                  <td>
                    <i className="fa fa-user" style={{ fontSize: "24px" }}></i>
                  </td>
                  <td>Khan</td>
                  <td>Male</td>
                  <td>A</td>
                  <td>Ahmad</td>
                  <td>Islamabad</td>
                  <td>7 Sep, 2009</td>
                  <td>034543657676</td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>#100001</td>
                  <td>
                    <i className="fa fa-user" style={{ fontSize: "24px" }}></i>
                  </td>
                  <td>Khan</td>
                  <td>Male</td>
                  <td>A</td>
                  <td>Ahmad</td>
                  <td>Islamabad</td>
                  <td>7 Sep, 2009</td>
                  <td>034543657676</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
