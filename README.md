# OpenCaptcha

The free CAPTCHA for everyone.

OpenCaptcha is free to use for everyone.

A Example of how a Captcha made with OpenCaptcha, looks like can be found here: http://realsphere.org/captcha/sample.html

# Compatible Languages
OpenCaptcha API supports:

```

JavaScript / HTML

C#

```

# How to use

OpenCaptcha is easy to use and simple to setup.

This is a Step by Step explanation of how to use it!

C#:

1) Download the latest release

2) Open ZIP File

3) Extract the CS Folder

4) Import the DLL inside into your C# project

5) Paste this code into your project:

```

///<summary>
/// Generate a new Captcha, will return base64 of an image
///</summary>
public static string GenerateCaptcha(int width, int height) 
{
    return Realsphere.OpenCaptcha.API.Gen(width, height)
}

///<summary>
/// Check if the entered text is correct **WARNING** After running this function you will need to generate a new Captcha!
///</summary>
public static bool CheckCaptcha(string b64, string text) 
{
    return Realsphere.OpenCaptcha.API.Check(b64, text)
}

```

6) Generate a Bitmap now by running: 

```
int width = 200;
int height = 200;
Bitmap captcha = null;
string b64 = GenerateCaptcha(width, height);
byte[] captchabits = Convert.FromBase64String(b64);
using (var ms = new MemoryStream(captchabits))
{
    captcha = new Bitmap(ms);
}

captchaImage.Image = captcha;

```

JavaScript / HTML:

1) Download the latest release

2) Open ZIP File

3) Move the opencaptcha.js into your folder, containing the file you want to have OpenCaptcha
4) Add this script tag to your header ```<script src="./opencaptcha.js"></script>```
5) Add this HTML to your file:
```
<div id="captcha-container">
    <img id="captcha-img">
    <input type="text" placeholder="Please enter the text in the picture." id="captcha-txt">
</div>
```
6) Now you can generate the captcha by doing: ```loadCaptcha();```
7) To Check if a captcha is correct run (After running this no matter the result you will need to generate a new captcha!): ```alert(checkCaptcha(document.getElementById("captcha-img").src, document.getElementById("captcha-txt").value))```
