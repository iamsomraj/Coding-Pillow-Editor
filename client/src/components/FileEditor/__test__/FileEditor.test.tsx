import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../../state/store";
import { IFile } from "../../../types";
import FileEditor from "../../FileEditor/FileEditor";
import { render } from "../../TestUtil/TestUtil";

test("file editor renders all the file items", () => {
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
  const { getAllByTestId } = render(
    <Router>
      <FileEditor
        selectedFile={sampleFiles[0]}
        fileList={sampleFiles}
        onDelete={() => {}}
        onErase={() => {}}
        onSelect={() => {}}
        onSave={() => {}}
      />
    </Router>,
    options
  );
  const fileItems = getAllByTestId("file-item");
  expect(fileItems.length === sampleFiles.length).toBeTruthy();
});
