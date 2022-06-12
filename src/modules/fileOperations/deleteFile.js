import { promises } from "fs";
import checkPathExists from "../common/helpers/checkPathExists.mjs";

const { rm } = promises;

const deleteFile = async (pathToFile) => {
  try {
    await checkPathExists(pathToFile);
    await rm(pathToFile);
  } catch (err) {
    console.log(err);
  }
};

export default deleteFile;
