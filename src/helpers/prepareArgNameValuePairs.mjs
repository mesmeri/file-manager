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

export default prepareArgNameValuePairs;
