import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../../state/store";
import { IFile } from "../../../types";
import { render } from "../../TestUtil/TestUtil";
import Preview from "../Preview";

test("preview window renders correctly", () => {
  const options = {
    initialState: {},
    store: store,
  };
  const sampleFiles: IFile[] = [];
  for (let index = 0; index < 5; index++) {
    const file: IFile = {
      _id: index.toString(),
      name: Math.random().toString() + ".js",
      value: "// Hi",
      language: "javascript",
    };
    sampleFiles.push(file);
  }

  const { getByTestId } = render(
    <Router>
      <Preview currentFile={sampleFiles[0]} />
    </Router>,
    options
  );
  const previewEl = getByTestId("preview");
  expect(previewEl).toBeInTheDocument();
});

test("preview window shows initial text correctly when the file is undefined", () => {
  const options = {
    initialState: {},
    store: store,
  };
  const initialPreviewText = `Hello there! Save files to see me change my content.....`;
  const sampleFiles: IFile[] = [];
  for (let index = 0; index < 5; index++) {
    const file: IFile = {
      _id: index.toString(),
      name: Math.random().toString() + ".js",
      value: "// Hi",
      language: "javascript",
    };
    sampleFiles.push(file);
  }

  const { getByTestId } = render(
    <Router>
      <Preview currentFile={undefined} />
    </Router>,
    options
  );
  const previewEl = getByTestId("preview");
  expect(previewEl).toBeInTheDocument();
  expect(previewEl.textContent).toBe(initialPreviewText);
});
