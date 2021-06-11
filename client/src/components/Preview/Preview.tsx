import React from "react";
import { IFile } from "../../types";

interface PreviewProps {
  currentFile: IFile | undefined;
}

const Preview: React.FC<PreviewProps> = (props) => {
  return (
    <div
      data-testid="preview"
      className="bg-white text-dark mx-3 p-3"
      style={{
        height: "75vh",
        width: "90%",
        wordWrap: "break-word",
      }}
    >
      {!props.currentFile
        ? `Hello there! Save files to see me change my content.....`
        : props.currentFile.value}
    </div>
  );
};

export default Preview;
