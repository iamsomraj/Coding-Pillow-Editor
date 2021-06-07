import { IFile, IUser } from "../../types";
import {
  createFileActionTypes,
  fetchFilesActionTypes,
  loginUserActionTypes,
  registerUserActionTypes,
  updateFileActionTypes,
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

export interface createFileRequestAction {
  type: createFileActionTypes.CREATE_FILE_REQUEST;
}

export interface createFileSuccessAction {
  type: createFileActionTypes.CREATE_FILE_SUCCESS;
  payload: IFile;
}

export interface createFileFailureAction {
  type: createFileActionTypes.CREATE_FILE_FAILURE;
  payload: string;
}

export type createFileActions =
  | createFileRequestAction
  | createFileSuccessAction
  | createFileFailureAction;

export interface updateFileRequestAction {
  type: updateFileActionTypes.UPDATE_FILE_REQUEST;
}

export interface updateFileSuccessAction {
  type: updateFileActionTypes.UPDATE_FILE_SUCCESS;
  payload: IFile;
}

export interface updateFileFailureAction {
  type: updateFileActionTypes.UPDATE_FILE_FAILURE;
  payload: string;
}

export type updateFileActions =
  | updateFileRequestAction
  | updateFileSuccessAction
  | updateFileFailureAction;

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
