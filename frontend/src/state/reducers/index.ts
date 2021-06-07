import { combineReducers } from "redux";
import { fetchFilesReducer } from "./fileReducer";
import { userLoginReducer } from "./userReducer";

export const rootReducer = combineReducers({
  fetchedFiles: fetchFilesReducer,
  userLogin: userLoginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
