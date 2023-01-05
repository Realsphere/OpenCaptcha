# OpenCaptcha

The free CAPTCHA for everyone.

OpenCaptcha is free to use for everyone.

A Example of how a Captcha made with OpenCaptcha, looks like can be found here: http://realsphere.org/account/support.html

## OpenCaptcha is only compatible with NodeJS

# How to setup

1) Download captcha.js
2) Add ```const generate = require("./captcha.js")``` to the top of your index.js
3) Now you can generate captcha images with ```const {image, text} = generate(width, height);``` (this will return the image base64 and the text)
