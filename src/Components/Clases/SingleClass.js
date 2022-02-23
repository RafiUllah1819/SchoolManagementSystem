import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const SingleClass = () => {
  const singleclassStudent = useSelector(
    (state) => state.totalClasses?.singleClassStudents
  );
  console.log("singlesdfsdfsdlassStudent", singleclassStudent);
  return (
    <div className="wrapper">
      <div className="student-form">
        single class student
        <table className="table table-stripped table-hover">
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
            {singleclassStudent?.map((student, i) => {
              return (
                <tr>
                  <td>{student.rollNo}</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};
