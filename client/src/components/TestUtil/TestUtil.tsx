import { render as rtlRender } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../state/reducers/index";

const render = (
  ui: any,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  }: any = {}
) => {
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";
export { render };
