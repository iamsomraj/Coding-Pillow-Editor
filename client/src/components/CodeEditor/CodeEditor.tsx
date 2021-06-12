import Editor, { OnChange } from "@monaco-editor/react";
import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { IFile } from "../../types";
import { editorConfig } from "./config/config";

interface CodeEditorProps {
  onEditorChange: OnChange;
  currentFile: IFile | undefined;
}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const defaultValue = `Create a new file...
Select it to experience the editor..
`;

  if (!props.currentFile || !props.currentFile._id) {
    return (
      <>
        <div className="ml-auto">
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={50}
          />
        </div>
        <Editor
          height={editorConfig.height}
          theme={isDarkMode ? editorConfig.theme : "light"}
          defaultValue={defaultValue}
        />
      </>
    );
  }

  return (
    <>
      <div className="ml-auto">
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={50}
        />
      </div>
      <Editor
        height={editorConfig.height}
        theme={isDarkMode ? editorConfig.theme : "light"}
        onChange={props.onEditorChange}
        path={props.currentFile.name}
        language={props.currentFile.language}
        value={props.currentFile.value}
      />
    </>
  );
};

export default CodeEditor;
