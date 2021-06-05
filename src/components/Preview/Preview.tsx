import React from "react";
import { IFile } from "../../types";

interface PreviewProps {
  htmlFile: IFile;
}

const Preview: React.FC<PreviewProps> = (props) => {
  return (
    <div className="bg-white" style={{ height: "80vh", color: "#000" }}>
      {props.htmlFile.value}
    </div>
  );
};

export default Preview;
