import { useEffect } from "react";
import ReactTerminal from "terminal-in-react";
import { IFiles } from "../../types";
import {
  EraseCommandUtil,
  HelpCommandUtil,
  OpenCommandUtil,
} from "./TerminalUtil";

export interface TerminalProps {
  files: IFiles;
  onSelect: (file: string) => void;
  onErase: (file: string) => void;
}

const Terminal: React.FC<TerminalProps> = (props) => {
  const myCommands = [
    {
      command: "clear",
      syntax: "<clear>",
      desc: "cleans the terminal terminal",
    },
    { command: "open", syntax: "<open FILENAME>", desc: "opens a file" },
    {
      command: "erase",
      syntax: "<erase FILENAME>",
      desc: "erases a file content",
    },
  ];

  return (
    <ReactTerminal
      color="white"
      outputColor="yellow"
      style={{
        fontSize: "1rem",
        width: "100%",
      }}
      startState="maximised"
      backgroundColor="rgb(34,34,34)"
      barColor="black"
      promptSymbol="🚀  "
      hideTopBar={true}
      allowTabs={false}
      commands={{
        open: OpenCommandUtil(props),
        erase: EraseCommandUtil(props),
        help: HelpCommandUtil(props, myCommands),
      }}
      msg="Hello! My name is Coding Pillow Terminal! type help for all options"
    />
  );
};

export default Terminal;
