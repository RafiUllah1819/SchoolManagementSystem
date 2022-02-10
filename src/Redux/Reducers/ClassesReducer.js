import {
  CLASSES_FAILED,
  CLASSES_PENDING,
  CLASSES_SUCCESS,
} from "../Constants/Constants";

const initialState = {
  data: [],
  isError: false,
};

export const ClassReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CLASSES_SUCCESS:
      return {
        ...state,
        isError: false,
      };
    case CLASSES_PENDING:
      return {
        ...state,
        isError: false,
      };
    case CLASSES_FAILED:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
