# linkit7688-pin-map
The GPIO pin map for [Linkit Smart 7688][linkit7688] board.
![Linkit Smart 7688 Pin Map](./linkit7688-pin-map.png)

## How to Use
Use [GPIO.JS][gpiojs] and Linkit 7688 Pin Map to light on an LED.
```
var GPIO = require('gpio-js');
var map = require('linkit7688-pin-map');
var led = new GPIO(map.p14, 'out');
led.val(0);
```

[linkit7688]: https://labs.mediatek.com/site/global/developer_tools/mediatek_linkit_smart_7688/whatis_7688/index.gsp
[gpiojs]: https://github.com/evanxd/gpio-js
