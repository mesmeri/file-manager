const changeWorkingDirectory = (command, args) => {
  switch (command) {
    case "up": {
      process.chdir("../");
      break;
    }
    case "cd": {
      process.chdir(args[0]);
      break;
    }
    default:
  }
};

export default changeWorkingDirectory;
