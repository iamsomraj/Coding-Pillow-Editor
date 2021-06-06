import { IFiles } from "../types";
import { jsCode, cssCode, htmlCode } from "./code";

export const files: IFiles = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: jsCode,
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: cssCode,
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: htmlCode,
  },
};
