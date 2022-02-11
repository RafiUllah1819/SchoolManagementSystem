import React, { useState, useEffect } from "react";
import { fetchClasses } from "../../Redux/Actions/FetchClasses";
import "./AddStudents.css";
import { Calender } from "./Calender";
import { useSelector, useDispatch } from "react-redux";
import { addStudentRecord } from "../../Redux/Actions/StudentActions";
import { fetchAllStudents } from "../../Redux/Actions/FetchStudents";

export const AddStudents = () => {
  const dispatch = useDispatch();
  const totalClasses = useSelector((state) => state?.totalClasses.data);
  console.log("totalclasses", totalClasses);
  useEffect(() => {
    fetchClasses(dispatch);
  }, []);

  const [name, setName] = useState("");
  const [singleObj, setSingleObj] = useState({});

  const [state, setState] = useState({
    name: "",
    rollNo: "",
    fName: "",
    address: "",
    gender: "",
    category: "",
    section: "",
    phone: "",
    admissionId: "",
    dob: "",
    shortBio: "",
  });

  const onHandleChange = (e) => {
    if (e.target.name === "category") setName(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setSingleObj(totalClasses.find((x) => x.category === name));
  }, [name]);
  const addNewStudent = () => {
    dispatch(addStudentRecord(state, singleObj));
  };
  console.log(" single obj", singleObj);
  return (
    <div className="wrapper">
      <h4 className="my-4" style={{ color: "darkgoldenrod" }}>
        Student Admission Form
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
              <div className="col-lg-3 col-md-4 form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={state.name}
                  onChange={onHandleChange}
                />
              </div>
              <div className="col-lg-3 col-md-4 form-group">
                <label htmlFor="">Roll No</label>
                <input
                  type="text"
                  className="form-control"
                  name="rollNo"
                  value={state.rollNo}
                  onChange={onHandleChange}
                />
              </div>
              <div className="col-lg-3 col-md-4 form-group">
                <label htmlFor="">Father Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fName"
                  value={state.fName}
                  onChange={onHandleChange}
                />
              </div>
              <div className="col-lg-3 col-md-4 form-group">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={state.address}
                  onChange={onHandleChange}
                />
              </div>
              <div className="col-lg-3 col-md-4 form-group">
                <label htmlFor="">Gender</label>
                <br></br>
                <select
                  name="gender"
                  id=""
                  value={state.gender}
                  onChange={onHandleChange}
                >
                  <option className="gender" value="Please Select gender">
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
              <div className="col-lg-3 col-md-4 form-group">
                <label htmlFor="">Class</label>
                <br></br>
                <select name="category" id="" onChange={onHandleChange}>
                  {totalClasses?.map((element, index) => {
                    return (
                      <option value={element.category}>
                        {element.category}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-lg-3 col-md-4 form-group">
                <label htmlFor="">Section</label>
                <br></br>
                <select name="section" id="" onChange={onHandleChange}>
                  {totalClasses?.map((element) => (
                    <option value={element.section}>{element.section}</option>
                  ))}
                </select>
              </div>
              <div className="col-lg-3 col-md-4 form-group">
                <label htmlFor="">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  value={state.phone}
                  onChange={onHandleChange}
                />
              </div>
              <div className="col-lg-3 col-md-4 form-group">
                <label htmlFor="">Admission Id</label>
                <input
                  type="number"
                  className="form-control"
                  name="admissionId"
                  value={state.address}
                  onChange={onHandleChange}
                />
              </div>
              <div className="col-lg-3 col-md-4 form-group">
                <label htmlFor="">Date of Birth</label>

                <Calender />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 form-group">
                <label htmlFor="">Short Bio</label>
                <br />
                <textarea
                  name="shortBio"
                  value={state.shortBio}
                  onChange={onHandleChange}
                  id=""
                  cols="50"
                  rows="6"
                ></textarea>
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
            <button
              className="btn btn-warning text-white"
              onClick={addNewStudent}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
