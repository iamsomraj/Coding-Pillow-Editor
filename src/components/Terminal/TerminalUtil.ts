import { TerminalProps } from "./Terminal";

export const OpenCommandUtil = (props: TerminalProps) => {
  return {
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
  };
};

export const EraseCommandUtil = (props: TerminalProps) => {
  return {
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
      props.onErase(arg);
    },
    options: [
      {
        name: "fileName",
        description: "File's content should be erased",
      },
    ],
  };
};

export const HelpCommandUtil = (
  props: TerminalProps,
  myCommands: {
    [key: string]: string;
  }[]
) => {
  return {
    method: (args: any, print: any) => {
      myCommands.forEach((command) => {
        print(`-${command.command}\t${command.syntax}\t\t${command.desc}`);
      });
      return;
    },
    options: [
      {
        name: "help",
        description: "All the available commands should be displayed",
      },
    ],
  };
};
