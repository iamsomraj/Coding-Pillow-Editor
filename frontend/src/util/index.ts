export const fileTypes = (fileExt: string) => {
  switch (fileExt) {
    case "html":
      return "html";
    case "css":
      return "css";
    case "js":
      return "javascript";
    case "json":
      return "json";
    case "md":
      return "md";
    case "mjs":
      return "mjs";
    case "ts":
      return "typescript";
  }
  return "javascript";
};
