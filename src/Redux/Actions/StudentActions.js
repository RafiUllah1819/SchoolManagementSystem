import {
  STUDENTS_ERR,
  STUDENTS_PENDING,
  STUDENTS_SECCESS,
} from "../Constants/Constants";
import { db } from "../../Config/Firebase";
import { addDoc, collection } from "firebase/firestore";

const addStudentRecord = (state, singleObj) => async (dispatch) => {
  console.log("student state", state);
  console.log(" action signle obj", singleObj);
  dispatch(student_pending());
  const collectionRef = collection(db, "group", singleObj.id, "subgroup");
  try {
    const sending = await addDoc(collectionRef, state);
    dispatch(student_success(singleObj));
    console.log("sending", sending);
  } catch (error) {
    console.log("error in colection", error);
  }
};

const student_success = (singleObj) => {
  return {
    type: STUDENTS_SECCESS,
    payload: singleObj,
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
