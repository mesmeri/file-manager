import { printGoodbyeMessage } from "./helpers/printUtils.mjs";

const closeManager = () => {
  printGoodbyeMessage();
  process.exit(0);
};

export default closeManager;
