import { combineReducers } from "redux";
import assistantReduer from "./assitantReducer";
import patientReducer from "./doctorReducer";
export default combineReducers({
  auth: "",
  response: assistantReduer,
  patients: patientReducer
});
