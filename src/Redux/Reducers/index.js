import { combineReducers } from "redux";
import { ClassReducer } from "./ClassesReducer";

const rootReducers = combineReducers({
  totalClasses: ClassReducer,
});

export default rootReducers;
