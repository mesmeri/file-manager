import os from "os";

const getOSInfo = (flag) => {
  switch (flag) {
    case "cpus": {
      console.log(os.cpus());
      break;
    }
    case "EOL": {
      console.log(JSON.stringify(os.EOL));
    }
    case "homedir": {
      console.log(os.homedir());
    }
    case "username": {
      console.log(os.userInfo().username);
      break;
    }
    case "architecture": {
      console.log(os.arch());
      break;
    }
  }
};

export default getOSInfo;
