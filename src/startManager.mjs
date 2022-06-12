import { Transform, pipeline } from "stream";
import setUsernameFromUserInput from "./helpers/setUsernameFromUserInput.mjs";
import parseUserInput from "./helpers/parseUserInput.mjs";
import validateUserInput from "./helpers/validateUserInput.mjs";
import handleUserInput from "./handleUserInput.mjs";
import {
  printCurrentDirectory,
  printGreeting,
  printGoodbyeMessage,
  printMessage,
} from "./helpers/printUtils.mjs";

const startManager = () => {
  const readStream = process.stdin;
  const writeStream = process.stdout;
  const transformStream = new Transform({
    async transform(chunk, encoding, callback) {
      const userInput = chunk.toString("utf8").replace("\n", "");
      const [command, args] = parseUserInput(userInput);
      const isValidInput = validateUserInput(command, args);

      if (!isValidInput) {
        printMessage("Invalid input \n");
      } else {
        try {
          await handleUserInput(command, args);
        } catch {
          printMessage("Operation failed \n");
        }
      }

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
