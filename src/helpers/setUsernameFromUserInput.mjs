import prepareArgNameValuePairs from "./prepareArgNameValuePairs.mjs";
import { setConfigFieldValue } from "../config.mjs";

const setUsernameFromUserInput = () => {
  const args = process.argv.slice(2);
  const argNameValuePairs = prepareArgNameValuePairs(args);

  if (argNameValuePairs.username) {
    const username = `${argNameValuePairs.username
      .slice(0, 1)
      .toUpperCase()}${argNameValuePairs.username.slice(1)}`;

    setConfigFieldValue("username", username);
  }
};

export default setUsernameFromUserInput;
