import {
  STUDENTS_ERR,
  STUDENTS_PENDING,
  STUDENTS_SECCESS,
} from "../Constants/Constants";
import { db } from "../../Config/Firebase";
import { addDoc, collection } from "firebase/firestore";

const addStudentRecord =
  (state, classObj, sectionObj, emptyState) => async (dispatch) => {
    console.log("emptyState", emptyState);
    const {
      name,
      rollNo,
      fName,
      address,
      gender,
      className,
      classId,
      sectionName,
      sectionId,
      phone,
      admissionId,
      dob,
      shortBio,
    } = state;
    console.log("student state", state);

    dispatch(student_pending());
    const collectionRef = collection(db, "students");
    try {
      const { sections, id: id1 } = sectionObj;
      const { classes, id: id2 } = classObj;
      console.log("sections in try", sections);
      console.log("class id", id2);
      console.log("sectionOBJ in try", sectionObj);
      const sending = await addDoc(collectionRef, {
        name,
        rollNo,
        fName,
        address,
        gender,
        phone,
        admissionId,
        dob,
        shortBio,
        sectionName: sections,
        sectionId: id1,
        className: classes,
        classId: id2,
      });
      dispatch(student_success());
      console.log("sending", sending);
    } catch (error) {
      console.log("error in colection", error);
    }
    emptyState();
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
