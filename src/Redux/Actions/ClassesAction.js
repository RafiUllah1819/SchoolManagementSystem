import {
  CLASSES_FAILED,
  CLASSES_PENDING,
  CLASSES_SUCCESS,
} from "../Constants/Constants";
import { db } from "../../Config/Firebase";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
// console.log("db", db);

export const createClass = (state, setState) => async (dispatch) => {
  // console.log("createnew class", state);
  const docRef = collection(db, "group");
  try {
    const createDoc = await addDoc(docRef, state);

    setState({
      category: " ",
      section: " ",
    });
    // return createDoc;
    console.log("createdoc", createDoc);
  } catch (err) {
    dispatch(createClassErr(err));
  }
};

const setClass = () => {
  return {
    type: CLASSES_SUCCESS,
  };
};
const createClassErr = (err) => {
  return {
    type: CLASSES_FAILED,
    err: err,
  };
};
const createClassPending = () => {
  return {
    type: CLASSES_PENDING,
  };
};
export { setClass, createClassErr, createClassPending };
