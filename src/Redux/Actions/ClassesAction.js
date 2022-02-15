import {
  CLASSES_FAILED,
  CLASSES_PENDING,
  CLASSES_SUCCESS,
} from "../Constants/Constants";
import { db } from "../../Config/Firebase";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
// console.log("db", db);

export const createClass = (state, setState) => async (dispatch) => {
  const { classes, sections } = state;
  console.log("createnew class", classes);
  const classRef = collection(db, "classes");
  const sectionRef = collection(db, "sections");
  console.log("classRef", classRef);
  try {
    const createDocOfClass = await addDoc(classRef, { classes: classes });
    const createDocOfSection = await addDoc(sectionRef, { sections: sections });

    // console.log("createDocOfClass", createDocOfClass.id);
    // console.log("createDocOfSection", createDocOfSection.id);
    dispatch(CLASSES_SUCCESS(createDocOfClass));
  } catch (err) {
    dispatch(createClassErr("error in createclass", err));
  }
};

const setClass = (createDocOfClass) => {
  return {
    type: CLASSES_SUCCESS,
    payload: createDocOfClass,
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
