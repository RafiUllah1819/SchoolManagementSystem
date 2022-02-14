import { db } from "../../Config/Firebase";
import { doc, collection, onSnapshot } from "firebase/firestore";
import {
  FETCH_CLASS_FAILED,
  FETCH_CLASS_PENDING,
  FETCH_CLASS_SUCCESS,
  FETCH_SECTIONS_SUCCESS,
} from "../Constants/Constants";
import { async } from "@firebase/util";

const fetchClasses = (dispatch) => {
  const collectionRef = collection(db, "classes");
  const unSub = onSnapshot(
    collectionRef,
    (snapshot) => {
      if (!snapshot.empty) {
        const updatedData = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log("updated data", updatedData);
        dispatch(fetchClassSuccess(updatedData));
      }
    },
    (error) => {
      dispatch(fetchClassErr(error));
      console.log(error);
    }
  );
  return () => unSub();
};
const fetchSection = (dispatch) => {
  const collectionRef = collection(db, "sections");
  const unSub = onSnapshot(
    collectionRef,
    (snapshot) => {
      if (!snapshot.empty) {
        const updatedData = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log("updated data", updatedData);
        dispatch(fetchSectionSuccess(updatedData));
      }
    },
    (error) => {
      dispatch(fetchClassErr(error));
      console.log(error);
    }
  );
  return () => unSub();
};

const fetchClassSuccess = (updatedData) => {
  return {
    type: FETCH_CLASS_SUCCESS,
    payload: updatedData,
  };
};
const fetchSectionSuccess = (updatedData) => {
  return {
    type: FETCH_SECTIONS_SUCCESS,
    payload: updatedData,
  };
};
const fetchClassErr = (error) => {
  return {
    type: FETCH_CLASS_FAILED,
    error,
  };
};
const fetchClassPending = () => {
  return {
    type: FETCH_CLASS_PENDING,
  };
};

export {
  fetchClassErr,
  fetchClassPending,
  fetchClassSuccess,
  fetchClasses,
  fetchSectionSuccess,
  fetchSection,
};
