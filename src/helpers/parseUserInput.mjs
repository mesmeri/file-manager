const parseUserInput = (userInput) => {
  const [command, ...args] = userInput.split(" ");

  if (command === "os") {
    args = args.map((arg) => {
      if (arg.startsWith("--")) {
        arg.slice(0, 2);
      }
      return arg;
    });
  }

  return [command, args];
};

export default parseUserInput;
