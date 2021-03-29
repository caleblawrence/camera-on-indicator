# camera-on-indicator

Kai wanted to know if my camera was on (for work meetings or other random things) without having to walk around and look for the light on my camera so I setup this process up.

It looks for the camera on / off events in the mac log and uses the Philips Hue API to toggle a light bulb when the camera is in use.

I tested this work the built in mac webcam and an external one and both work. From what I can see the process uses very little memory and you can start it in the background with pm2.

Check out the demo here: 
https://www.youtube.com/watch?v=9Jm9hPuIvmo

Check out an overview video here:
https://www.youtube.com/watch?v=3o04y7HQaj4&t=9s

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

### Note on performance
At first I thought this solution would be pretty bad in terms of performance because it's doing string comparison on a log but is seems to only use about `34.1mb` of memory and 0% cpu so it might be ok actually.

### Tutorial I followed to figure out the Philips Hue api
https://developers.meethue.com/develop/get-started-2/


### Stackoverflow answer that helped me figure out how to detect if the camera is on or off
https://stackoverflow.com/questions/60535678/macos-detect-when-camera-is-turned-on-off
