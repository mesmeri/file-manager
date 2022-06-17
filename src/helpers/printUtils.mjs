import config from "../modules/configs/config.mjs";

export const printCurrentDirectory = () =>
  process.stdout.write(`You are currently in ${process.cwd()}\n \n`);

export const printGreeting = () =>
  process.stdout.write(`Welcome to the File Manager, ${config.username}!\n`);

export const printGoodbyeMessage = () =>
  process.stdout.write(
    `\nThank you for using File Manager, ${config.username}!\n`
  );

export const printMessage = (message) => process.stdout.write(`${message}\n`);
