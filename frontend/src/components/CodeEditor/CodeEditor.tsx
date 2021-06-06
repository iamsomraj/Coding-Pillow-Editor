import Editor, { OnChange } from "@monaco-editor/react";
import { editorConfig } from "../../config/config";
import { IFile } from "../../types";
interface CodeEditorProps {
  onEditorChange: OnChange;
  currentFile: IFile;
}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
  const defaultValue = `
Create a new file...
Select it to experience the editor..
`;

  if (!props.currentFile.id) {
    return (
      <Editor
        height={editorConfig.height}
        theme={editorConfig.theme}
        defaultValue={defaultValue}
      />
    );
  }

  return (
    <Editor
      height={editorConfig.height}
      theme={editorConfig.theme}
      onChange={props.onEditorChange}
      path={props.currentFile.name}
      language={props.currentFile.language}
      value={props.currentFile.value}
    />
  );
};

export default CodeEditor;
