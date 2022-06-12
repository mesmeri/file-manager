import { promises } from "fs";

const { access } = promises;

const checkPathExists = async (pathToResource, mode) =>
  await access(pathToResource, mode);

export default checkPathExists;
