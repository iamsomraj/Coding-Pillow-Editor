import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../../state/store";
import { render } from "../../TestUtil/TestUtil";
import FormContainer from "../FormContainer";

test("form container renders and displays its children correctly", () => {
  const options = {
    initialState: {},
    store: store,
  };
  const { getByTestId } = render(
    <Router>
      <FormContainer>Hello World</FormContainer>
    </Router>,
    options
  );
  const formContEl = getByTestId("form-container");
  expect(formContEl.textContent).toBe("Hello World");
});
