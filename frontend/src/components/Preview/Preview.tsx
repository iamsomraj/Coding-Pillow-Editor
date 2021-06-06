import React from "react";
import { IFile } from "../../types";

interface PreviewProps {
  currentFile: IFile;
}

const Preview: React.FC<PreviewProps> = (props) => {
  return (
    <div
      className="bg-white text-dark mx-3 p-3"
      style={{
        height: "75vh",
        width: "90%",
        wordWrap: "break-word",
      }}
    >
      {props.currentFile.value && props.currentFile.value}
      {!props.currentFile.value && `Hello there! Type anything in editor....`}
    </div>
  );
};

export default Preview;
