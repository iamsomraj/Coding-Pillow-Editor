import React from "react";
import { IFile } from "../../types";

interface PreviewProps {
  htmlFile: IFile;
}

const Preview: React.FC<PreviewProps> = (props) => {
  return <div>{props.htmlFile.value}</div>;
};

export default Preview;
