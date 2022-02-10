import React from "react";

export const StudentDetail = () => {
  return (
    <div className="wrapper">
      <div className="student-form">
        <div className="card">
          <div className="card-body">
            <h4 className="my-4" style={{ color: "darkgray" }}>
              Student Details
            </h4>
            <div className="row">
              <div className="col-md-4">
                <img src="" alt="" />
                <i
                  className="fa fa-user"
                  style={{
                    fontSize: "222px",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                ></i>
              </div>
              <div className="col-md-4">
                <div className="card-details">
                  <ul className="student-data">
                    <li>
                      <span className="student-property">Roll no</span>
                      <span className="student-value">123</span>
                    </li>
                    <li>
                      <span className="student-property">Name</span>
                      <span className="student-value">Khan</span>
                    </li>
                    <li>
                      <span className="student-property">Father Name</span>
                      <span className="student-value">Ahmad</span>
                    </li>
                    <li>
                      <span className="student-property">Class</span>
                      <span className="student-value">2</span>
                    </li>
                    <li>
                      <span className="student-property">Section</span>
                      <span className="student-value">A</span>
                    </li>
                    <li>
                      <span className="student-property">Gender</span>
                      <span className="student-value">Male</span>
                    </li>
                    <li>
                      <span className="student-property">Date Of Birth</span>
                      <span className="student-value">7,sep 2009</span>
                    </li>
                    <li>
                      <span className="student-property">Admisson Date</span>
                      <span className="student-value">2/5/2014</span>
                    </li>
                    <li>
                      <span className="student-property">Address</span>
                      <span className="student-value">Islamabad</span>
                    </li>
                    <li>
                      <span className="student-property">Phone</span>
                      <span className="student-value">03252342432</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
