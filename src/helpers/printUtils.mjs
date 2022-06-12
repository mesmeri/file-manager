import config from "../config.mjs";

export const printCurrentDirectory = () =>
  process.stdout.write(`You are currently in ${process.cwd()}\n \n`);

export const printGreeting = (username) =>
  process.stdout.write(`Welcome to the File Manager, ${config.username}!\n`);

export const printGoodbyeMessage = (username) =>
  process.stdout.write(
    `\nThank you for using File Manager, ${config.username}!\n`
  );
