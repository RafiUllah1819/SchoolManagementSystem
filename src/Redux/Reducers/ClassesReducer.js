import { faServer } from "@fortawesome/free-solid-svg-icons";
import {
  CLASSES_SUCCESS,
  FETCH_CLASS_FAILED,
  FETCH_CLASS_PENDING,
  FETCH_CLASS_SUCCESS,
  FETCH_SECTIONS_SUCCESS,
  FETCH_SINGLE_CLASS,
} from "../Constants/Constants";

const initialState = {
  allClasses: [],
  isError: false,
  err: null,
  classData: {},
  allSections: [],
  singleClassStudents: [],
};

export const ClassReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_CLASS_SUCCESS:
      return {
        ...state,
        allClasses: actions.payload,
      };
    case CLASSES_SUCCESS:
      return {
        ...state,
        classData: actions.payload,
        isError: false,
      };
    case FETCH_CLASS_PENDING:
      return {
        ...state,
        isError: false,
      };
    case FETCH_SECTIONS_SUCCESS:
      return {
        ...state,
        allSections: actions.payload,
        isError: false,
      };
    case FETCH_CLASS_FAILED:
      return {
        ...state,
        isError: true,
        err: actions.error,
      };
    case FETCH_SINGLE_CLASS:
      return {
        ...state,
        isError: false,
        singleClassStudents: actions.payload,
      };

    default:
      return state;
  }
};
