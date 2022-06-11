import { Transform, pipeline } from "stream";

const prepareArgNameValuePairs = (args) => {
  const result = args.reduce((acc, arg, ind) => {
    if (arg.startsWith("--")) {
      const argName = arg.slice(2);
      const argValueCandidate = args[ind + 1];
      let argValue;

      if (argValueCandidate && !argValueCandidate.startsWith("--")) {
        argValue = argValueCandidate;
      } else {
        argValue = true;
      }

      acc[argName] = argValue;
    }
    return acc;
  }, {});

  return result;
};

const getUsername = () => {
  const args = process.argv.slice(2);
  const argNameValuePairs = prepareArgNameValuePairs(args);

  return argNameValuePairs.username
    ? `${argNameValuePairs.username
        .slice(0, 1)
        .toUpperCase()}${argNameValuePairs.username.slice(1)}`
    : "friend";
};

const startManager = () => {
  const username = getUsername();
  const readStream = process.stdin;
  const writeStream = process.stdout;
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.reverse());
      callback();
    },
  });

  process.stdout.write(`Welcome to the File Manager, ${username}!\n`);

  process.on("SIGINT", () => {
    process.stdout.write(`\n Thank you for using File Manager, ${username}!\n`);
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

startManager();
