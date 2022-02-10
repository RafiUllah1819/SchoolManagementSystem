import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

export const Admin = () => {
  return (
    <div className="wrapper">
      <div className="admin">
        <h4 style={{ margin: "20px 0" }}>Admin Dashboard</h4>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body d-flex justify-content-between py-4 px-4">
                <div
                  className="card-icon"
                  style={{
                    background: "#d1f3e0",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    color="green"
                    fontSize="35px"
                  />
                </div>
                <div className="card-details">
                  <h5 style={{ color: "darkgray" }}>Students</h5>
                  <h5>15000</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body d-flex justify-content-between py-4 px-4">
                <div
                  className="card-icon"
                  style={{
                    background: "#e1f1ff",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    color="#3f7afc"
                    fontSize="35px"
                  />
                </div>
                <div className="card-details">
                  <h5 style={{ color: "darkgray" }}>Teacher</h5>
                  <h5>50</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body d-flex justify-content-between py-4 px-4">
                <div
                  className="card-icon"
                  style={{
                    background: "#fff2d8",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    color="#ffa001"
                    fontSize="35px"
                  />
                </div>
                <div className="card-details">
                  <h5 style={{ color: "darkgray" }}>Parents</h5>
                  <h5>1000</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body d-flex justify-content-between py-4 px-4">
                <div
                  className="card-icon"
                  style={{
                    background: "#ffeaea",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMoneyBill}
                    color="#ff0000"
                    fontSize="35px"
                  />
                </div>
                <div className="card-details">
                  <h5 style={{ color: "darkgray" }}>Earning</h5>
                  <h5>$500000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
