import { createReadStream, createWriteStream } from "fs";
import { createBrotliCompress } from "zlib";
import checkPathExists from "../common/helpers/checkPathExists.mjs";

const compressFile = async (source, destination) => {
  await checkPathExists(source);

  const readableStream = createReadStream(source);
  const writableStream = createWriteStream(destination);
  const archive = createBrotliCompress();

  readableStream.pipe(archive).pipe(writableStream);
};

export default compressFile;
