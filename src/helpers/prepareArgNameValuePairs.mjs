const prepareArgNameValuePairs = (args) => {
  const result = args.reduce((acc, arg) => {
    if (arg.startsWith("--")) {
      const slicedArg = arg.slice(2);
      const [argName, argValue] = slicedArg.split("=");
      acc[argName] = argValue;
    }
    return acc;
  }, {});

  return result;
};

export default prepareArgNameValuePairs;
