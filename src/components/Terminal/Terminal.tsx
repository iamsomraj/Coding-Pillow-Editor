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
    { command: "alert", syntax: "<alert TEXT>", desc: "creates an alert" },
    { command: "echo", syntax: "<echo TEXT>", desc: "displays a message" },
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
        alert: alertCommandUtil(),
        echo: echoCommandUtil(),
        help: HelpCommandUtil(myCommands),
      }}
      msg="Hello! My name is Coding Pillow Terminal! type help for all options"
    />
  );
};

export default Terminal;
