import React, { useEffect } from "react";
import "./ClassStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses } from "../../Redux/Actions/FetchClasses";

export const Clases = () => {
  const dispatch = useDispatch();
  const totalClasses = useSelector((state) => state.totalClasses.data);
  console.log("totalclasses", totalClasses);
  useEffect(() => {
    fetchClasses(dispatch);
  }, []);
  return (
    <div className="wrapper">
      <div className="student-form">
        <div className="card">
          <div className="card-body">
            <h4 className="my-4" style={{ color: "darkgray" }}>
              Total Classes
            </h4>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Classes</th>
                  <th scope="col">Sections</th>
                </tr>
              </thead>
              <tbody>
                {totalClasses ? (
                  totalClasses.map((element, i) => {
                    return (
                      <tr key={i}>
                        <td>{element.category}</td>
                        <td>{element.section}</td>
                      </tr>
                    );
                  })
                ) : (
                  <h5>No Classes found</h5>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
