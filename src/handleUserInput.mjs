import changeWorkingDirectory from "./modules/navigation/changeWorkingDirectory.mjs";
import listFiles from "./modules/navigation/listFiles.mjs";

const handleUserInput = (command, args) => {
  switch (command) {
    case "up":
    case "cd": {
      changeWorkingDirectory(command, args);
      break;
    }
    case "ls": {
      listFiles();
      break;
    }
    default:
  }
};

export default handleUserInput;
