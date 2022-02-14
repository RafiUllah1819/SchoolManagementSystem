import {
  FETCH_STUDENT_PENDING,
  FETCH_STUDENT_ERR,
  FETCH_STUDENT_SUCCESS,
} from "../Constants/Constants";
import { db } from "../../Config/Firebase";
import {
  doc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const fetchAllStudents = (studentObj) => {
  // const collectionRef = collection(db, "group", studentObj.id, "subgroup");
  // const q = query(collectionRef, orderBy("createdAt", "asc"));
  console.log("fetch students", studentObj);
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
