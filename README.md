# OpenCaptcha

The free CAPTCHA for everyone.

A Example of how a Captcha made with OpenCaptcha, looks like can be found here: http://realsphere.org/account/support.html

## OpenCaptcha is only compatible with NodeJS

# How to setup

1) Download captcha.js
2) Add ```const generate = require("./captcha.js")``` to the top of your index.js
3) Now you can generate captcha images with ```const {image, text} = generate(width, height);``` (this will return the image base64 and the text)

# Bug Fixing
If there are any issues you cant seem to fix, please create an issue here on github, or if you dont have a lot of time, please send us an 
[email](mailto:realsphere.org "Mailto Realsphere Support")
