const parseUserInput = (userInput) => {
  const [command, ...args] = userInput.split(" ");
  const normalizedCommand = command.replace(/(\r\n|\n|\r)/gm, "");
  const normalizedArgs = args.map((arg) => arg.replace(/(\r\n|\n|\r)/gm, ""));

  return [normalizedCommand, normalizedArgs];
};

export default parseUserInput;
