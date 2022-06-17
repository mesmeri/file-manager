import readFileContent from "./modules/fileOperations/readFileContent.mjs";
import changeWorkingDirectory from "./modules/navigation/changeWorkingDirectory.mjs";
import listFiles from "./modules/navigation/listFiles.mjs";
import createFile from "./modules/fileOperations/createFile.mjs";
import renameFile from "./modules/fileOperations/renameFile.mjs";
import copy from "./modules/fileOperations/copy.mjs";
import moveFile from "./modules/fileOperations/moveFile.mjs";
import deleteFile from "./modules/fileOperations/deleteFile.mjs";
import compressFile from "./modules/compressing/compressFile.mjs";
import decompressFile from "./modules/compressing/decompressFile.mjs";
import getOSInfo from "./modules/os/getOSInfo.mjs";
import calculateHash from "./modules/hash/calculateHash.mjs";
import closeManager from "./closeManager.mjs";

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
      break;
    }
    case "cp": {
      await copy(args[0], args[1]);
      break;
    }
    case "mv": {
      await moveFile(args[0], args[1]);
      break;
    }
    case "rm": {
      await deleteFile(args[0]);
      break;
    }
    case "compress": {
      await compressFile(args[0], args[1]);
      break;
    }
    case "decompress": {
      await decompressFile(args[0], args[1]);
      break;
    }
    case "os": {
      getOSInfo(args[0].slice(2));
      break;
    }
    case "hash": {
      await calculateHash(args[0]);
      break;
    }
    case ".exit": {
      closeManager();
      break;
    }
    default:
  }
};

export default handleUserInput;
