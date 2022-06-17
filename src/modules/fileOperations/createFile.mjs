import { promises } from "fs";

const { writeFile } = promises;

const createFile = async (fileName) => {
  return await writeFile(fileName, "", { flag: "wx" });
};

export default createFile;
