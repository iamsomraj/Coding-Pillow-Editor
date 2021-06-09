import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () =>
  bindActionCreators(actionCreators, useDispatch());
