import { IFile } from "../types";
import { jsCode, cssCode, htmlCode } from "./code";

export const files: IFile[] = [
  {
    id: "script.js",
    name: "script.js",
    language: "javascript",
    value: jsCode,
  },
  {
    id: "style.css",
    name: "style.css",
    language: "css",
    value: cssCode,
  },
  {
    id: "index.html",
    name: "index.html",
    language: "html",
    value: htmlCode,
  },
];
