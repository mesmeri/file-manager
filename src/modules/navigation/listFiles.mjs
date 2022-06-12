import { promises } from "fs";
import checkPathExists from "../common/helpers/checkPathExists.mjs";

const { readdir } = promises;

const listFiles = async () => {
  const dirPath = process.cwd();

  checkPathExists(dirPath);
  const fileNames = await readdir(dirPath);

  console.log(fileNames);
  console.log("\n");
};

export default listFiles;
