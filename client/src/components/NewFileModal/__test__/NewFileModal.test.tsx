import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../../state/store";
import { IFile } from "../../../types";
import { render } from "../../TestUtil/TestUtil";
import NewFileModal from "../NewFileModal";

test("new file modal renders correctly", () => {
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
      <NewFileModal
        name=""
        show={true}
        onChange={() => {}}
        handleClose={() => {}}
        onSave={() => {}}
      />
    </Router>,
    options
  );
  const fileModalEl = getByTestId("new-file-modal");
  expect(fileModalEl).toBeInTheDocument();
});

test("new file modal takes input correctly", () => {
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
      <NewFileModal
        name={sampleFiles[0].name}
        show={true}
        onChange={() => {}}
        handleClose={() => {}}
        onSave={() => {}}
      />
    </Router>,
    options
  );
  const inputEl = getByTestId("file-name-input");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl.value).toBe(sampleFiles[0].name);
});
