import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../../state/store";
import { render } from "../../TestUtil/TestUtil";
import Flexi from "../Flexi";

test("resizable component takes children and renders it correctly", () => {
  const options = {
    initialState: {},
    store: store,
  };
  const TEXT = "HELLO WORLD";
  const { baseElement } = render(
    <Router>
      <Flexi>{TEXT}</Flexi>
    </Router>,
    options
  );
  const flexiItemEl = baseElement;
  expect(flexiItemEl).toBeInTheDocument();
  expect(flexiItemEl.innerHTML.includes(TEXT)).toBeTruthy();
});
