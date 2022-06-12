import { promises } from "fs";
import { createHash } from "crypto";
import checkPathExists from "../common/helpers/checkPathExists.mjs";

const { readFile } = promises;

const calculateHash = async (pathToFile) => {
  await checkPathExists(pathToFile);

  const hash = createHash("sha256");
  const fileContent = await readFile(pathToFile);
  const result = hash.update(fileContent).digest("hex");

  console.log(result);
};

export default calculateHash;
