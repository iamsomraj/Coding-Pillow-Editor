import ReactTerminal from "terminal-in-react";
import {
  alertCommandUtil,
  echoCommandUtil,
  HelpCommandUtil,
} from "./TerminalUtil";

const Terminal: React.FC = (props) => {
  const myCommands = [
    {
      command: "clear",
      syntax: "<clear>",
      desc: "cleans the terminal terminal",
    },
    { command: "alert", syntax: "<alert WORD>", desc: "creates an alert" },
    { command: "echo", syntax: "<echo WORD>", desc: "displays a message" },
  ];

  return (
    <ReactTerminal
      color="white"
      outputColor="yellow"
      style={{
        fontSize: "1rem",
        padding: "1rem 2rem",
      }}
      startState="maximised"
      backgroundColor="rgb(68,68,68)"
      promptSymbol="🚀  "
      hideTopBar={true}
      allowTabs={false}
      commands={{
        alert: alertCommandUtil(),
        echo: echoCommandUtil(),
        help: HelpCommandUtil(myCommands),
      }}
      msg="Hello! My name is Coding Pillow Terminal! type help for all options"
    />
  );
};

export default Terminal;
