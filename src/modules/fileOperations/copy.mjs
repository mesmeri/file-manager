import { promises } from "fs";
import constants from "constants";
import path from "path";

const { copyFile, mkdir } = promises;

import checkPathExists from "../common/helpers/checkPathExists.mjs";

const copy = async (source, destination) => {
  const fileName = path.parse(source).name;
  const fileExt = path.parse(source).ext;

  await checkPathExists(source);

  try {
    await checkPathExists(destination);
  } catch (err) {
    await mkdir(destination);
  }

  await copyFile(
    source,
    path.resolve(destination, `${fileName}${fileExt}`),
    constants.COPYFILE_EXCL
  );
};

export default copy;
