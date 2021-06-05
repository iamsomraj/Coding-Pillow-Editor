import { useState } from "react";
import Editor from "@monaco-editor/react";
import someJSCode from "../../data/SomeJSCode";
import { editorConfig } from "../../config/config";
import { IFiles } from "../../types";
import { Col, Row } from "react-bootstrap";

const files: IFiles = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: someJSCode,
  },
};

const MyEditor: React.FC = () => {
  const [fileName, setFileName] = useState("script.js");
  const file = files[fileName];

  return (
    <>
      <Row className="my-4">
        <Col md={3}>FileEditor</Col>
        <Col md={6}>
          <button onClick={() => setFileName("script.js")}>script.js</button>
          <Editor
            height={editorConfig.height}
            theme={editorConfig.theme}
            path={file.name}
            defaultLanguage={file.language}
            defaultValue={file.value}
          />
        </Col>
        <Col md={3}>Preview</Col>
      </Row>
    </>
  );
};

export default MyEditor;
