import {
  FETCH_CLASS_FAILED,
  FETCH_CLASS_PENDING,
  FETCH_CLASS_SUCCESS,
} from "../Constants/Constants";

const initialState = {
  data: [],
  isError: false,
  err: null,
};

export const ClassReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_CLASS_SUCCESS:
      return {
        ...state,
        data: actions.payload,
      };
    case FETCH_CLASS_PENDING:
      return {
        ...state,
        isError: false,
      };
    case FETCH_CLASS_FAILED:
      return {
        ...state,
        isError: true,
        err: actions.error,
      };
    default:
      return state;
  }
};
