import {
  STUDENTS_SECCESS,
  STUDENTS_PENDING,
  STUDENTS_ERR,
} from "../Constants/Constants";

const initialState = {
  student: {},
  isError: false,
  err: null,
};

export const StudentReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case STUDENTS_SECCESS:
      return {
        ...state,
        isError: false,
        student: actions.payload,
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
