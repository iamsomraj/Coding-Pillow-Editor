import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../../state/store";
import CodeEditor from "../../CodeEditor/CodeEditor";
import { render } from "../../TestUtil/TestUtil";

test("code editor displays correctly even when there is no selected file", () => {
  const options = {
    initialState: {},
    store: store,
  };
  const { baseElement } = render(
    <Router>
      <CodeEditor currentFile={undefined} onEditorChange={() => {}} />
    </Router>,
    options
  );
  const editorEl = baseElement;
  expect(editorEl.innerHTML.includes("Loading...")).toBeTruthy();
});
