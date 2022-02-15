import {
  STUDENTS_SECCESS,
  STUDENTS_PENDING,
  STUDENTS_ERR,
  FETCH_STUDENT_SUCCESS,
} from "../Constants/Constants";

const initialState = {
  student: {},
  isError: false,
  err: null,
  allStudents: [],
};

export const StudentReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_STUDENT_SUCCESS:
      return {
        ...state,
        isError: false,
        allStudents: actions.payload,
      };
    case STUDENTS_PENDING:
      return {
        ...state,
        isError: false,
      };
    case STUDENTS_ERR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
