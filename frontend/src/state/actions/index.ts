import { IFile, IUser } from "../../types";
import { fetchFilesActionTypes, loginUserActionTypes } from "../action-types";

export interface fetchFilesRequestAction {
  type: fetchFilesActionTypes.FETCH_FILES_REQUEST;
}

export interface fetchFilesSuccessAction {
  type: fetchFilesActionTypes.FETCH_FILES_SUCCESS;
  payload: IFile[];
}

export interface fetchFilesFailureAction {
  type: fetchFilesActionTypes.FETCH_FILES_FAILURE;
  payload: string;
}

export type fetchFilesAction =
  | fetchFilesRequestAction
  | fetchFilesSuccessAction
  | fetchFilesFailureAction;

export interface loginUserRequestAction {
  type: loginUserActionTypes.LOGIN_USER_REQUEST;
}

export interface loginUserSuccessAction {
  type: loginUserActionTypes.LOGIN_USER_SUCCESS;
  payload: IUser;
}

export interface loginUserFailureAction {
  type: loginUserActionTypes.LOGIN_USER_FAILURE;
  payload: string;
}

export interface logoutUserAction {
  type: loginUserActionTypes.LOGOUT_USER;
}

export type loginUserAction =
  | loginUserRequestAction
  | loginUserSuccessAction
  | loginUserFailureAction
  | logoutUserAction;
