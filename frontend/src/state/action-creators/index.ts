import axios from "axios";
import { Dispatch } from "redux";
import {
  createFileActionTypes,
  deleteFileActionTypes,
  fetchFilesActionTypes,
  loginUserActionTypes,
  registerUserActionTypes,
  updateFileActionTypes,
} from "../action-types";

import {
  createFileActions,
  deleteFileActions,
  fetchFilesAction,
  loginUserAction,
  updateFileActions,
} from "../actions";

export const fetchFiles =
  () => async (dispatch: Dispatch<fetchFilesAction>, getState: any) => {
    try {
      dispatch({ type: fetchFilesActionTypes.FETCH_FILES_REQUEST });
      const {
        loginUser: { data: userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get("api/files/", config);

      dispatch({
        type: fetchFilesActionTypes.FETCH_FILES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: fetchFilesActionTypes.FETCH_FILES_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const createFile =
  (name: string, language: string, value: string) =>
  async (dispatch: Dispatch<createFileActions>, getState: any) => {
    try {
      dispatch({ type: createFileActionTypes.CREATE_FILE_REQUEST });
      const {
        loginUser: { data: userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "api/files/",
        { name, language, value },
        config
      );

      dispatch({
        type: createFileActionTypes.CREATE_FILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: createFileActionTypes.CREATE_FILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateFile =
  (_id: string, name: string, language: string, value: string) =>
  async (dispatch: Dispatch<updateFileActions>, getState: any) => {
    try {
      dispatch({ type: updateFileActionTypes.UPDATE_FILE_REQUEST });
      const {
        loginUser: { data: userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `api/files/${_id}`,
        { name, language, value },
        config
      );

      dispatch({
        type: updateFileActionTypes.UPDATE_FILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: updateFileActionTypes.UPDATE_FILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteFile =
  (_id: string, name: string, language: string, value: string) =>
  async (dispatch: Dispatch<deleteFileActions>, getState: any) => {
    try {
      dispatch({ type: deleteFileActionTypes.DELETE_FILE_REQUEST });
      const {
        loginUser: { data: userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.delete(`api/files/${_id}`, config);

      dispatch({
        type: deleteFileActionTypes.DELETE_FILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: deleteFileActionTypes.DELETE_FILE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const loginUser =
  (email: string, password: string) =>
  async (dispatch: Dispatch<loginUserAction>) => {
    try {
      dispatch({
        type: loginUserActionTypes.LOGIN_USER_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );

      dispatch({
        type: loginUserActionTypes.LOGIN_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: loginUserActionTypes.LOGIN_USER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = () => (dispatch: Dispatch<loginUserAction>) => {
  dispatch({ type: loginUserActionTypes.LOGOUT_USER });
  document.location.href = "/login";
};

export const register =
  (name: string, email: string, password: string) =>
  async (
    dispatch: (arg0: {
      type: loginUserActionTypes | registerUserActionTypes;
      payload?: any;
    }) => void
  ) => {
    try {
      dispatch({
        type: registerUserActionTypes.REGISTER_USER_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users",
        { name, email, password },
        config
      );

      dispatch({
        type: registerUserActionTypes.REGISTER_USER_SUCCESS,
        payload: data,
      });

      dispatch({
        type: loginUserActionTypes.LOGIN_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: registerUserActionTypes.REGISTER_USER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// export const getUserDetails = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_DETAILS_REQUEST,
//     })

// const {
//   userLogin: { userInfo },
// } = getState()

// const config = {
//   headers: {
//     Authorization: `Bearer ${userInfo.token}`,
//   },
// }

// const { data } = await axios.get(`/api/users/${id}`, config)

//     dispatch({
//       type: USER_DETAILS_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message
//     if (message === 'Not authorized, token failed') {
//       dispatch(logout())
//     }
//     dispatch({
//       type: USER_DETAILS_FAIL,
//       payload: message,
//     })
//   }
// }
