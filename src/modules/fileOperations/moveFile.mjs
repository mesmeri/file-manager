import copy from "./copy.mjs";
import deleteFile from "./deleteFile.js";

const moveFile = async (source, destination) => {
  await copy(source, destination);
  await deleteFile(source);
};

export default moveFile;
