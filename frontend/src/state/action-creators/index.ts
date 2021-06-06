import axios from "axios";
import { Dispatch } from "redux";
import { fetchFilesActionTypes } from "../action-types";
import { fetchFilesAction } from "../actions";

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
