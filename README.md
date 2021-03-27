# camera-on-indicator

Kai wanted to know if my camera was on (for work meetings or other random things) without having to walk around and look for the light on my camera so I setup this process up.

It looks for the camera on / off events in the mac log and uses the Philips Hue API to toggle a light bulb when the camera is in use.

I tested this work the built in mac webcam and an external one and both work. From what I can see the process uses very little memory and you can start it in the background with pm2.

### Install pm2
```
yarn global add pm2

```

### Start app in the background
```
pm2 start app.js --watch --max-memory-restart 100M
```

### Start app after reboots
https://pm2.keymetrics.io/docs/usage/startup/

### View memory / cpu usage
```
pm2 status
```

### Tutorial I followed to figure out the Philips Hue api
https://developers.meethue.com/develop/get-started-2/


### Stackoverflow answer that helped me figure out how to detect if the camera is on or off
https://stackoverflow.com/questions/60535678/macos-detect-when-camera-is-turned-on-off
