import deatilsReducer from "./detailsReducer";
import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";

export default combineReducers({
  userDetails: detailsReducer,
});
