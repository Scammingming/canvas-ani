function getParticle() {
  colourR = Math.random() * 250;
  colourG = Math.random() * 250;
  colourB = Math.random() * 250;
  var aParticle = {
    x: Math.random() * cnv.width - cnv.width / 2,
    y: Math.random() * cnv.height - cnv.height / 2,
    radius: Math.random() * 10 + 5,
    colourR: colourR,
    colourG: colourG,
    colourB: colourB,
    colour: `rgb(${colourR}, ${colourG}, ${colourB})`,
    xGrav: Math.random() * 3 + 1,
    yGrav: Math.random() * 3 + 1,
  };
  return aParticle;
}

// Takes an array of circles and draws them

function drawCircles(allCircles) {
  for (let i = 0; i < allCircles.length; i++) {
    ctx.fillStyle = allCircles[i].colour;
    ctx.beginPath();
    ctx.arc(
      allCircles[i].x,
      allCircles[i].y,
      allCircles[i].radius,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}
// 123 = random colors, randomRGB() function
// 121 = green, pink, psyhcic colors
// 122 = Deoxys
// 112 = blue and yellow
// 111 = monochrome
