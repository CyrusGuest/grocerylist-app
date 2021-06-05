import { combineReducers } from "redux";
import authReducer from "./auth";
import entitiesReducer from "./entities";

export default combineReducers({
  entities: entitiesReducer,
  auth: authReducer,
});
