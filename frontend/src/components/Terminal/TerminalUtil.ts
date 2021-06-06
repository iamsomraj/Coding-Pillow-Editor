export const echoCommandUtil = () => {
  return {
    method: (args: any, print: any) => {
      const arg = args._[0] || args.message;
      if (!arg) {
        print("-bash:error: invalid command");
        return;
      }

      print(`${arg}`);
    },
    options: [
      {
        name: "message",
        description: "Message text should be displayed",
      },
    ],
  };
};

export const alertCommandUtil = () => {
  return {
    method: (args: any, print: any) => {
      const arg = args._[0] || args.message;
      if (!arg) {
        print("-bash:error: invalid command");
        return;
      }
      alert(`Coding Pillow Terminal says: ${arg}`);
      print("-bash:success: alert");
    },
    options: [
      {
        name: "message",
        description: "Alert should be shown",
      },
    ],
  };
};

export const HelpCommandUtil = (
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
