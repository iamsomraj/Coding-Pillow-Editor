import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../../state/store";
import { IFile } from "../../../types";
import { fireEvent, render } from "../../TestUtil/TestUtil";
import FileItem from "../FileItem";

test("file item renders file details correctly", () => {
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
      <FileItem
        file={sampleFiles[0]}
        selectedFile={sampleFiles[0]}
        onDelete={() => {}}
        onErase={() => {}}
        onSelect={() => {}}
        onSave={() => {}}
      />
    </Router>,
    options
  );
  const fileItemEl = getByTestId("file-item");
  expect(fileItemEl.innerHTML.includes(sampleFiles[0].name)).toBeTruthy();
});

test("all buttons present in file item works correctly", () => {
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
      <FileItem
        file={sampleFiles[0]}
        selectedFile={sampleFiles[0]}
        onDelete={() => {}}
        onErase={() => {}}
        onSelect={() => {}}
        onSave={() => {}}
      />
    </Router>,
    options
  );
  const fileItemEl = getByTestId("file-item");
  expect(fileItemEl.innerHTML.includes(sampleFiles[0].name)).toBeTruthy();

  const fileItemSaveBtnEl = getByTestId("file-item__save-btn");
  expect(fileItemSaveBtnEl.textContent).toBe("Save");

  fireEvent.click(fileItemSaveBtnEl);

  const fileItemEraseBtnEl = getByTestId("file-item__erase-btn");
  expect(fileItemEraseBtnEl.textContent).toBe("Erase");

  fireEvent.click(fileItemEraseBtnEl);

  const fileItemDeleteBtnEl = getByTestId("file-item__delete-btn");
  expect(fileItemDeleteBtnEl.textContent).toBe("Delete");

  fireEvent.click(fileItemDeleteBtnEl);
});
