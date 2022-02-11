import {
  STUDENTS_ERR,
  STUDENTS_PENDING,
  STUDENTS_SECCESS,
} from "../Constants/Constants";
import { db } from "../../Config/Firebase";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";

const addStudentRecord = (state) => (dispatch) => {
  console.log("student state", state);
  dispatch(student_pending());
  const docRef = collection(db, "group");
  //   addDoc(docRef);
};

const student_success = () => {
  return {
    type: STUDENTS_SECCESS,
  };
};
const student_pending = () => {
  return {
    type: STUDENTS_PENDING,
  };
};
const student_err = () => {
  return {
    type: STUDENTS_ERR,
  };
};

export { addStudentRecord, student_pending, student_success, student_err };
