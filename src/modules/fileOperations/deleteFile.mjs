import { promises } from "fs";
import checkPathExists from "../common/helpers/checkPathExists.mjs";

const { rm } = promises;

const deleteFile = async (pathToFile) => {
  await checkPathExists(pathToFile);
  await rm(pathToFile);
};

export default deleteFile;
