import axios from "axios";
import { Dispatch } from "redux";
import { fetchFilesActionTypes, loginUserActionTypes } from "../action-types";
import { fetchFilesAction, loginUserAction } from "../actions";

export const fetchFiles =
  () => async (dispatch: Dispatch<fetchFilesAction>) => {
    dispatch({ type: fetchFilesActionTypes.FETCH_FILES_REQUEST });
    try {
      const { data } = await axios.get("api/files/");

      dispatch({
        type: fetchFilesActionTypes.FETCH_FILES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: fetchFilesActionTypes.FETCH_FILES_FAILURE,
        payload: "Something went wrong while fetching files",
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

// export const register = (name, email, password) => async (dispatch) => {
//   try {
//     dispatch({
//       type: USER_REGISTER_REQUEST,
//     })

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }

//     const { data } = await axios.post(
//       '/api/users',
//       { name, email, password },
//       config
//     )

//     dispatch({
//       type: USER_REGISTER_SUCCESS,
//       payload: data,
//     })

//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: data,
//     })

//   } catch (error) {
//     dispatch({
//       type: USER_REGISTER_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }

// export const getUserDetails = (id) => async (dispatch, getState) => {
//   try {
//     dispatch({
//       type: USER_DETAILS_REQUEST,
//     })

//     const {
//       userLogin: { userInfo },
//     } = getState()

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     }

//     const { data } = await axios.get(`/api/users/${id}`, config)

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
