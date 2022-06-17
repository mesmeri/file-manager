import checkPathExists from "../common/helpers/checkPathExists.mjs";
import { promises } from "fs";

const { readFile } = promises;

const readFileContent = async (pathToFile) => {
  await checkPathExists(pathToFile);
  const content = await readFile(pathToFile, { encoding: "utf-8" });

  console.log(content);
  console.log("\n");
};

export default readFileContent;
