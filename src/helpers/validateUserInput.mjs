const availableCommands = ["up"];

const validateUserInput = (command, args) => {
  switch (command) {
    case ".exit":
    case "up":
    case "ls": {
      if (args.length === 0) return true;
      break;
    }
    case "os":
    case "cd":
    case "cat":
    case "add":
    case "rm":
    case "hash": {
      if (args.length === 1) return true;
      break;
    }
    case "rn":
    case "cp":
    case "mv":
    case "compress":
    case "decompress": {
      if (args.length === 2) return true;
      break;
    }
    default: {
      return false;
    }
  }
};

export default validateUserInput;
