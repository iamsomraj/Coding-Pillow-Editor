import { combineReducers } from "redux";
import { fetchFilesReducer } from "./fileReducer";
import { loginUserReducer, registerUserReducer } from "./userReducer";

export const rootReducer = combineReducers({
  fetchedFiles: fetchFilesReducer,
  loginUser: loginUserReducer,
  registerUser: registerUserReducer
});

export type RootState = ReturnType<typeof rootReducer>;
