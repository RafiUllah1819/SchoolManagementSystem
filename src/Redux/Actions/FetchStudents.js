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

const fetchAllStudents = (dispatch) => {
  const collectionRef = collection(db, "students");
  // const q = query(collectionRef, orderBy("createdAt", "asc"));
  const unsub = onSnapshot(
    collectionRef,
    (snapshot) => {
      if (!snapshot.empty) {
        const updateSnap = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log("udpatedSnap of students", updateSnap);
        dispatch(getStudents(updateSnap));
      }
    },
    (error) => {
      dispatch(getStudentErr(error));
      console.log(error);
    }
  );
  return () => unsub();
};

const getStudents = (updateSnap) => {
  return {
    type: FETCH_STUDENT_SUCCESS,
    payload: updateSnap,
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
