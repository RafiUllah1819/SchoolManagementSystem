import { combineReducers } from "redux";
import { ClassReducer } from "./ClassesReducer";
import { StudentReducer } from "./StudentReducer";

const rootReducers = combineReducers({
  totalClasses: ClassReducer,
  totalStudents: StudentReducer,
});

export default rootReducers;
