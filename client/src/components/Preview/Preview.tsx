import React from "react";
import { IFile } from "../../types";

interface PreviewProps {
  currentFile: IFile | undefined;
}

const Preview: React.FC<PreviewProps> = (props) => {
  return (
    <div
      data-testid="preview"
      className="bg-white text-dark p-2"
      style={{
        minHeight: "80vh",
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
