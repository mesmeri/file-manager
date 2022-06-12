const parseUserInput = (userInput) => {
  const [command, ...args] = userInput.split(" ");

  return [command, args];
};

export default parseUserInput;
