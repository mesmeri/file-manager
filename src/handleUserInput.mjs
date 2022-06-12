import readFileContent from "./modules/fileOperations/readFileContent.mjs";
import changeWorkingDirectory from "./modules/navigation/changeWorkingDirectory.mjs";
import listFiles from "./modules/navigation/listFiles.mjs";
import createFile from "./modules/fileOperations/createFile.mjs";
import renameFile from "./modules/fileOperations/renameFile.mjs";
import copy from "./modules/fileOperations/copy.mjs";
import moveFile from "./modules/fileOperations/moveFile.mjs";
import deleteFile from "./modules/fileOperations/deleteFile.js";
import compressFile from "./modules/compressing/compressFile.mjs";
import decompressFile from "./modules/compressing/decompressFile.mjs";

const handleUserInput = async (command, args) => {
  switch (command) {
    case "up":
    case "cd": {
      changeWorkingDirectory(command, args);
      break;
    }
    case "ls": {
      await listFiles();
      break;
    }
    case "cat": {
      await readFileContent(args[0]);
      break;
    }
    case "add": {
      await createFile(args[0]);
      break;
    }
    case "rn": {
      await renameFile(args[0], args[1]);
    }
    case "cp": {
      await copy(args[0], args[1]);
    }
    case "mv": {
      await moveFile(args[0], args[1]);
    }
    case "rm": {
      await deleteFile(args[0]);
    }
    case "compress": {
      await compressFile(args[0], args[1]);
    }
    case "decompress": {
      await decompressFile(args[0], args[1]);
    }
    default:
  }
};

export default handleUserInput;
