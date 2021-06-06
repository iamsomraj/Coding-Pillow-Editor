import { IFiles } from "../../types";
import { fetchFilesActionTypes } from "../action-types";

export interface fetchFilesRequestAction {
  type: fetchFilesActionTypes.FETCH_FILES_REQUEST;
}

export interface fetchFilesSuccessAction {
  type: fetchFilesActionTypes.FETCH_FILES_SUCCESS;
  payload: IFiles[];
}

export interface fetchFilesFailureAction {
  type: fetchFilesActionTypes.FETCH_FILES_FAILURE;
  payload: string;
}

export type fetchFilesAction =
  | fetchFilesRequestAction
  | fetchFilesSuccessAction
  | fetchFilesFailureAction;
