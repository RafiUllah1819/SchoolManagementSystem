import {
  FETCH_STUDENT_PENDING,
  FETCH_STUDENT_ERR,
  FETCH_STUDENT_SUCCESS,
} from "../Constants/Constants";
import { db } from "../../Config/Firebase";
import { doc, collection, onSnapshot } from "firebase/firestore";

const fetchAllStudents = () => {
  //   const collectionRef = collection(db, "group", singleObj.id, "subgroup");
  console.log("fetch students");
};

const getStudents = () => {
  return {
    type: FETCH_STUDENT_SUCCESS,
  };
};

const getStudentPending = () => {
  return {
    type: FETCH_STUDENT_PENDING,
  };
};

const getStudentErr = () => {
  return {
    type: FETCH_STUDENT_ERR,
  };
};

export { fetchAllStudents, getStudents, getStudentErr, getStudentPending };
