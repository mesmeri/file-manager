import copy from "./copy.mjs";
import deleteFile from "./deleteFile.mjs";

const moveFile = async (source, destination) => {
  await copy(source, destination);
  await deleteFile(source);
};

export default moveFile;
