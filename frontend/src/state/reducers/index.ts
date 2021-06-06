import { combineReducers } from "redux";
import fetchFilesReducer from "./fetchFilesReducer";

export const rootReducer = combineReducers({
  fetchFiles: fetchFilesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;