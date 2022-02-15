import React, { useEffect } from "react";
import "./ClassStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses, fetchSection } from "../../Redux/Actions/FetchClasses";

export const Clases = () => {
  const dispatch = useDispatch();
  const totalClasses = useSelector((state) => state.totalClasses.allClasses);
  const totalSections = useSelector((state) => state.totalClasses.allSections);
  // console.log("totalclasses", totalClasses);
  // console.log("totalsection", totalSections);
  useEffect(() => {
    fetchClasses(dispatch);
  }, []);
  useEffect(() => {
    fetchSection(dispatch);
  }, []);

  return (
    <div className="wrapper">
      <div className="student-form">
        <div className="card">
          <div className="card-body">
            <h4 className="my-4" style={{ color: "darkgray" }}>
              Total Classes
            </h4>
            <table
              className="table table-striped"
              style={{ maxWidth: "330px" }}
            >
              <thead>
                <tr>
                  <th scope="col">Classes</th>
                  {/* <th scope="col">Sections</th> */}
                </tr>
              </thead>
              <tbody>
                {totalClasses ? (
                  totalClasses.map((element, i) => {
                    return (
                      <tr key={i}>
                        <td>{element.classes}</td>
                      </tr>
                    );
                  })
                ) : (
                  <h5>No Classes found</h5>
                )}
                {/* {totalSections ? (
                  totalSections.map((sectionData, i) => {
                    return (
                      <tr key={i}>
                        <td>{sectionData.sections}</td>
                      </tr>
                    );
                  })
                ) : (
                  <h5>No Classes found</h5>
                )} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
