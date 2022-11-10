const { createCanvas } = require("canvas");

const FONTBASE = 200;
const FONTSIZE = 35;

const relativeFont = width => {
  const ratio = FONTSIZE / FONTBASE;
  const size = width * ratio;
  return `${size}px sans-serif`;
};

  function getRndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

const arbitraryRandom = (min, max) => Math.random() * (max - min) + min;

const randomRotation = (degrees = 15) => (arbitraryRandom(-degrees, degrees) * Math.PI) / 180;

const alternateCapitals = str =>
  [...str].map((char, i) => char[`to${i % 2 ? "Upper" : "Lower"}Case`]()).join("");

const randomText = () =>
  alternateCapitals(
    Math.random()
      .toString(36)
      .substring(2, 8)
  );

const configureText = (ctx, width, height) => {
    ctx.font = relativeFont(width);
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    const text = randomText();
    ctx.fillText(text, width / 2, height / 2);
    return text;
  };
  
  const generate = (width, height) => {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");
    ctx.translate(0.5, 0.5);
    ctx.strokeStyle = getRndColor();
    ctx.fillStyle = getRndColor();
    ctx.fillRect(0, 0, width, height); 

    let i = 0;
    while(i < width + height / 2) {
        ctx.strokeStyle = getRndColor();
        ctx.lineWidth = arbitraryRandom(1, 10);

        ctx.beginPath();
        ctx.moveTo(arbitraryRandom(0, width), arbitraryRandom(0, height));
        ctx.lineTo(arbitraryRandom(0, width), arbitraryRandom(0, height));
        ctx.stroke();

        i+=1;
    }

    ctx.rotate(randomRotation());
    ctx.strokeStyle = getRndColor();
    ctx.fillStyle = getRndColor();
    const text = configureText(ctx, width, height);
    return {
      image: canvas.toDataURL(),
      text: text
    };
  };

  module.exports = generate;