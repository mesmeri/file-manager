import { Transform, pipeline } from "stream";
import setUsernameFromUserInput from "./helpers/setUsernameFromUserInput.mjs";
import {
  printCurrentDirectory,
  printGreeting,
  printGoodbyeMessage,
} from "./helpers/printUtils.mjs";

const startManager = () => {
  const readStream = process.stdin;
  const writeStream = process.stdout;
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const userInput = chunk.toString("utf8").replace("\n", "");
      const command = userInput;

      printCurrentDirectory();
      callback();
    },
  });

  setUsernameFromUserInput();
  printGreeting();
  printCurrentDirectory();

  process.on("SIGINT", () => {
    printGoodbyeMessage();
    process.exit(0);
  });

  pipeline(readStream, transformStream, writeStream, (err) => {
    if (err) {
      process.stderr(
        "Something went wrong. Please, restart the application.",
        err
      );
      process.exit(1);
    }
  });
};

export default startManager;
