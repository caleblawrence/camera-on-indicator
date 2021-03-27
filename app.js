const { spawn } = require("child_process");
const child = spawn("sh", ["-c", "log stream"]);
const axios = require("axios").default;
var https = require("https");

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

// This is setup for Philips Hue.
const BRIDGE_IP_ADDRESS = "192.168.1.107";
const USER_NAME = "x9ykVnR38CTpXLm48jVfbWE-pmHojBl5Y2qUMiq4";
const LIGHT_ID = 7;

child.stdout.setEncoding("utf-8").on("data", (chunk) => {
  if (chunk.includes("Post event kCameraStreamStart")) {
    console.log("camera started");
    instance
      .put(
        `https://${BRIDGE_IP_ADDRESS}/api/${USER_NAME}/lights/${LIGHT_ID}}/state`,
        {
          on: true,
        }
      )
      .then(function (response) {
        console.log("turned light on");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (chunk.includes("Post event kCameraStreamStop")) {
    console.log("camera stopped");
    instance
      .put(
        `https://${BRIDGE_IP_ADDRESS}/api/${USER_NAME}/lights/${LIGHT_ID}}/state`,
        {
          on: false,
        }
      )
      .then(function (response) {
        console.log("turned light off");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});

child.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
