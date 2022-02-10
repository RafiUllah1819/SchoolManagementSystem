import React, { useState } from "react";
import "./ClassStyle.css";
import { useDispatch } from "react-redux";
import { createClass } from "../../Redux/Actions/ClassesAction";
import { faL } from "@fortawesome/free-solid-svg-icons";

export const AddClasses = () => {
  const dispatch = useDispatch();

  const [valid, setValid] = useState(false);
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
    if (state.category === "" || state.section === "") {
      setValid(true);
    } else {
      setValid(false);
      dispatch(createClass(state, setState));
    }
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
                {valid && state.category === "" ? (
                  <span className="text-danger">Please fill the field</span>
                ) : null}
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="">Section</label>
                <input
                  type="text"
                  className="form-control"
                  value={state.section}
                  onChange={onChangeSection}
                />
                {valid && state.section === "" ? (
                  <span className="text-danger">Please fill the field</span>
                ) : null}
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
