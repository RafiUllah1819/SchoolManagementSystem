import React, { useEffect, useState } from "react";
import "./AddStudents.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllStudents } from "../../Redux/Actions/FetchStudents";

export const TotalStudents = () => {
  const dispatch = useDispatch();
  const totalStudents = useSelector(
    (state) => state.totalStudents?.allStudents
  );
  // console.log("totalstudents", totalStudents);
  const [filterStudent, setFilterStudent] = useState([]);
  useEffect(() => {
    dispatch(fetchAllStudents());
  }, []);
  useEffect(() => {
    setFilterStudent(totalStudents);
  }, [totalStudents]);

  const filterRecord = (e) => {
    const value = e.target.value;
    let arr = [];
    if (value.length >= 3) {
      arr = filterStudent.filter((data) => {
        return data.name.toLowerCase().startsWith(value.toLowerCase());
      });
      setFilterStudent(arr);
    } else setFilterStudent(totalStudents);
  };
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
                  type="search"
                  className="form-control"
                  placeholder="Search by Name ..."
                  onChange={filterRecord}
                />
              </div>
              <div className="col-md-3 form-group px-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Class ..."
                />
              </div>
              <div className="col-md-2">
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
                  {/* <th scope="col">Admisson No</th> */}
                  {/* <th scope="col">Photo</th> */}
                  <th scope="col">Name</th>
                  <th scope="col">Class</th>
                  <th scope="col">Section</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Parents</th>
                  <th scope="col">Address</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                {filterStudent.map((student, i) => {
                  return (
                    <tr key={i}>
                      <td>{student.rollNo}</td>
                      {/* <td>{student.admissionId}</td> */}
                      {/* <td>
                        <i
                          className="fa fa-user"
                          style={{ fontSize: "24px" }}
                        ></i>
                      </td> */}
                      <td>{student.name}</td>
                      <td>{student.className}</td>
                      <td>{student.sectionName}</td>
                      <td>{student.gender}</td>
                      <td>{student.fName}</td>
                      <td>{student.address}</td>
                      <td>{student.dob}</td>
                      <td>{student.phone}</td>
                    </tr>
                  );
                })}
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
