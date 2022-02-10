import React, { useState } from "react";
import "./ClassStyle.css";
import { useDispatch } from "react-redux";
import { createClass } from "../../Redux/Actions/ClassesAction";

export const AddClasses = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    category: "",
    section: "",
  });
  const onChangeClass = (e) => {
    let copy = { ...state };
    copy.category = e.target.value;
    setState(copy);
  };
  const onChangeSection = (e) => {
    let copy = { ...state };
    copy.section = e.target.value;
    setState(copy);
  };
  const onAddClass = () => {
    // const { category, section } = state;
    // const obj = { category, section };
    // console.log("obj", obj);
    dispatch(createClass(state));
  };
  return (
    <div className="wrapper">
      <div className="student-form">
        <div className="card">
          <div className="card-body">
            <h4 className="my-4" style={{ color: "darkgray" }}>
              Add New Class
            </h4>
            <div className="row">
              <div className="col-md-3 form-group">
                <label htmlFor="">Class</label>
                <input
                  type="text"
                  className="form-control"
                  value={state.category}
                  onChange={onChangeClass}
                />
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">Section</label>
                <input
                  type="text"
                  className="form-control"
                  value={state.section}
                  onChange={onChangeSection}
                />
              </div>
            </div>
            <button className="btn btn-warning text-white" onClick={onAddClass}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
