import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../../state/store";
import { render } from "../../TestUtil/TestUtil";
import Loader from "../../Loader/Loader";

test("loader spinner renders correctly", () => {
  const options = {
    initialState: {},
    store: store,
  };
  const { getByTestId } = render(
    <Router>
      <Loader />
    </Router>,
    options
  );
  const loader = getByTestId("loader");
  expect(loader).toBeInTheDocument();
});
