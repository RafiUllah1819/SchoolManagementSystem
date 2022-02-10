import {
  CLASSES_FAILED,
  CLASSES_PENDING,
  CLASSES_SUCCESS,
} from "../Constants/Constants";
import { db } from "../../Config/Firebase";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
// console.log("db", db);

export const createClass = async (state, dispatch) => {
  console.log("createnew class", state);
  const docRef = doc(collection(db, "categories"));
  try {
    const createDoc = await setDoc(docRef, state);
    console.log("createdoc", createDoc);
  } catch (err) {
    dispatch(createClassErr(err));
  }
};

export const setClass = (payload) => {
  return {
    type: CLASSES_SUCCESS,
    payload,
  };
};
export const createClassErr = (err) => {
  return {
    type: CLASSES_FAILED,
    payload: err,
  };
};
export const createClassPending = () => {
  return {
    type: CLASSES_PENDING,
  };
};
