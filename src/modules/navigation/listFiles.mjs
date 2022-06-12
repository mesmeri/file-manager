import { promises } from "fs";

const { access, readdir } = promises;

const listFiles = async () => {
  const filesDirPath = process.cwd();

  await access(filesDirPath);
  const fileNames = await readdir(filesDirPath);

  console.log(fileNames);
  console.log("\n");
};

export default listFiles;
