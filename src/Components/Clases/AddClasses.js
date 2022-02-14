import React, { useState, useEffect } from "react";
import "./ClassStyle.css";
import { useDispatch } from "react-redux";
import { createClass } from "../../Redux/Actions/ClassesAction";
import { faL } from "@fortawesome/free-solid-svg-icons";

export const AddClasses = () => {
  const dispatch = useDispatch();

  const [valid, setValid] = useState(false);
  const [state, setState] = useState({
    classes: "",
    sections: "",
  });
  const onChangeClass = (e) => {
    let copy = { ...state };
    copy.classes = e.target.value;
    setState(copy);
  };
  const onChangesections = (e) => {
    let copy = { ...state };
    copy.sections = e.target.value;
    setState(copy);
  };
  const onAddClass = () => {
    dispatch(createClass(state, setState));
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
                  value={state.classes}
                  onChange={onChangeClass}
                />
                {/* {valid && state.classes === "" ? (
                  <span className="text-danger">Please fill the field</span>
                ) : null} */}
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">sections</label>
                <input
                  type="text"
                  className="form-control"
                  value={state.sections}
                  onChange={onChangesections}
                />
                {/* {valid && state.sections === "" ? (
                  <span className="text-danger">Please fill the field</span>
                ) : null} */}
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
