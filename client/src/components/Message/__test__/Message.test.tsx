import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../../state/store";
import { render } from "../../TestUtil/TestUtil";
import Message from "../Message";

test("alert message renders correctly", () => {
  const options = {
    initialState: {},
    store: store,
  };
  const { getByTestId } = render(
    <Router>
      <Message />
    </Router>,
    options
  );
  const messageEl = getByTestId("message");
  expect(messageEl).toBeInTheDocument();
});
