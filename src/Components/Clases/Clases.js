import React, { useState, useEffect } from "react";
import "./ClassStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchClasses, fetchSection } from "../../Redux/Actions/FetchClasses";
import { Link } from "react-router-dom";
import { fetchAllStudents } from "../../Redux/Actions/FetchStudents";
import { singleClassStudent as fetchstudent } from "../../Redux/Actions/SingleClassStudent";

export const Clases = () => {
  const dispatch = useDispatch();
  const totalClasses = useSelector((state) => state.totalClasses.allClasses);
  const totalSections = useSelector((state) => state.totalClasses.allSections);
  const totalStudents = useSelector((state) => state.totalStudents.allStudents);
  const [index, setIndex] = useState(null);
  // const [singleClassStudent, setSingleClassStudent] = useState([]);
  console.log(" totalStudents of class", totalStudents);
  // console.log("totalsection", totalSections);
  useEffect(() => {
    dispatch(fetchClasses());
    dispatch(fetchSection());
    dispatch(fetchAllStudents());

  }, []);

  // useEffect(() => {
   
  // }, [singleClassStudent]);

  const showSingleClass = (id) => {
    console.log("showsinglemethod", id);
    setIndex(id);

    const newStudent = totalStudents.filter(
      (student) => student.classId === id 
    );
    dispatch(fetchstudent(newStudent))

    // setSingleClassStudent(newStudent);
    // console.log("newstudent", newStudent);
  };
  // console.log("singlclassStudent", singleClassStudent);

  return (
    <div className="wrapper">
      <div className="student-form">
        <div className="card">
          <div className="card-body">
            <h4 className="my-4" style={{ color: "darkgray" }}>
              Total Classes
            </h4>
            <h4 className="my-4" style={{ color: "darkgray" }}></h4>
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
                        {/* <Link to="/"> */}

                        <Link to="/singleclass">
                          <td
                            onClick={() => showSingleClass(element.id)}
                            style={{ cursor: "pointer" }}
                          >
                            {element.classes}
                          </td>
                        </Link>
                        {/* </Link> */}
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
