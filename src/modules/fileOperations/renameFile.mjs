import path from "path";
import { promises } from "fs";
import constants from "constants";
import checkPathExists from "../common/helpers/checkPathExists.mjs";

const { rename } = promises;

const renameFile = async (pathToFile, newFileName) => {
  await checkPathExists(pathToFile, constants.W_OK);

  const newPathToFile = path.resolve(path.parse(pathToFile).dir, newFileName);

  try {
    await checkPathExists(newPathToFile);

    throw new Error("File exists");
  } catch (err) {
    if (err.message === "File exists") {
      throw err;
    }

    return await rename(pathToFile, newPathToFile);
  }
};

export default renameFile;
