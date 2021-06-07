import { combineReducers } from "redux";
import {
  createFileReducer,
  fetchFilesReducer,
  updateFileReducer,
} from "./fileReducer";
import { loginUserReducer, registerUserReducer } from "./userReducer";

export const rootReducer = combineReducers({
  fetchedFiles: fetchFilesReducer,
  createFile: createFileReducer,
  updateFile: updateFileReducer,
  loginUser: loginUserReducer,
  registerUser: registerUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
