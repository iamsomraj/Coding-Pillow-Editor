import ReactTerminal from "terminal-in-react";
import { IFiles } from "../../types";

interface TerminalProps {
  onSelect: (file: string) => void;
  files: IFiles;
}

const Terminal: React.FC<TerminalProps> = (props) => {
  const showMsg = () => "Hello Friend";

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
        open: {
          method: (args: any, print: any) => {
            const arg = args._[0] || args.fileName;
            if (!arg) {
              print("-bash:error: file name not found");
              print("-bash:error: invalid command");
              return;
            }

            if (!props.files[arg]) {
              print("-bash:error: file does not exists");
              return;
            }

            print(`File ${arg} selected`);
            props.onSelect(arg);
          },
          options: [
            {
              name: "fileName",
              description: "One file should be selected",
            },
          ],
        },
        showmsg: showMsg,
        popup: () => alert("Terminal in React"),
      }}
      description={{
        "open-file": "open filename.ext",
        showmsg: "shows a message",
        alert: "alert",
        popup: "alert",
      }}
      msg="Hello! My name is Coding Pillow Terminal! type help for all options"
    />
  );
};

export default Terminal;
