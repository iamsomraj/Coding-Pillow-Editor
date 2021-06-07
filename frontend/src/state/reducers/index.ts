import { combineReducers } from "redux";
import { createFileReducer, fetchFilesReducer } from "./fileReducer";
import { loginUserReducer, registerUserReducer } from "./userReducer";

export const rootReducer = combineReducers({
  fetchedFiles: fetchFilesReducer,
  createFile: createFileReducer,
  loginUser: loginUserReducer,
  registerUser: registerUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
