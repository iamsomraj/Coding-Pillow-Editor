import { IFile, IUser } from "../../types";
import {
  fetchFilesActionTypes,
  loginUserActionTypes,
  registerUserActionTypes,
} from "../action-types";

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

export interface registerUserRequestAction {
  type: registerUserActionTypes.REGISTER_USER_REQUEST;
  payload: IUser;
}

export interface registerUserSuccessAction {
  type: registerUserActionTypes.REGISTER_USER_SUCCESS;
  payload: IUser;
}

export interface registerUserFailureAction {
  type: registerUserActionTypes.REGISTER_USER_FAILURE;
  payload: string;
}

export type registerUserAction =
  | registerUserRequestAction
  | registerUserSuccessAction
  | registerUserFailureAction
  | logoutUserAction;
