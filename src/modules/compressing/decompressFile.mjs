import { createReadStream, createWriteStream } from "fs";
import { createBrotliDecompress } from "zlib";
import checkPathExists from "../common/helpers/checkPathExists.mjs";

const decompressFile = async (source, destination) => {
  await checkPathExists(source);

  const readableStream = createReadStream(source);
  const writableStream = createWriteStream(destination);
  const archive = createBrotliDecompress();

  readableStream.pipe(archive).pipe(writableStream);
};

export default decompressFile;
