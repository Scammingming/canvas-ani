// Lesson 3: Associative Arrays & Data Options
// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 550;
cnv.height = 550;
var img1 = document.getElementById(`spiral`);
let angle = 0;
let angleAdder = 1;
let anglecounter = 0;
let rotateCounter = 0;
let rotateVar = Math.PI;
let xcounter = 0;
let ycounter = 0;
let spacecounter = 0;
// Type your examples from the notes below this line.
let particle = [];
for (let i = 0; i < 250; i++) {
  particle.push(getParticle());
}

// track time, every 60 frames = 1 second
var frame = 0;

var rPressed = false;
document.addEventListener("keydown", keyboardHandler);

function keyboardHandler(event) {
  if (event.code == "KeyR") {
    rPressed = true;
    anglecounter++;
    if (anglecounter > 1) {
      anglecounter = 0;
    }
    console.log(angle);
    console.log("pressed R");
  }
  if (event.code == `Space`) {
    spacecounter++;
    if (spacecounter > 4) {
      spacecounter = 0;
    }

    for (let i = 0; i < particle.length; i++) {
      if (spacecounter == 0) {
        particle[
          i
        ].colour = `rgb(${particle[i].colourR}, ${particle[i].colourG}, ${particle[i].colourB})`;
      }
      if (spacecounter == 1) {
        particle[
          i
        ].colour = `rgb(${particle[i].colourR}, ${particle[i].colourR}, ${particle[i].colourB})`;
      }
      if (spacecounter == 2) {
        particle[
          i
        ].colour = `rgb(${particle[i].colourR}, ${particle[i].colourR}, ${particle[i].colourR})`;
      }
      if (spacecounter == 3) {
        particle[
          i
        ].colour = `rgb(${particle[i].colourR}, ${particle[i].colourG}, ${particle[i].colourG})`;
      }
      if (spacecounter == 4) {
        particle[
          i
        ].colour = `rgb(${particle[i].colourR}, ${particle[i].colourG}, ${particle[i].colourR})`;
      }
    }
  }
  if (event.code == `NumpadAdd` || event.code == `Equal`) {
    particle.push(getParticle());
    console.log(particle);
  }
  if (event.code == `NumpadSubtract` || event.code == `Minus`) {
    particle.pop();
    console.log(particle);
  }
  if (event.keyCode == `38`) {
    angleAdder++;
    if (angleAdder > 10) {
      angleAdder = 10;
    }
    console.log(angleAdder);
  }
  if (event.keyCode == `40`) {
    angleAdder--;
    if (angleAdder < -10) {
      angleAdder = -10;
    }
    console.log(angleAdder);
  }
  if (event.code == `KeyP`) {
    rotateCounter++;
    if (rotateCounter % 2 == 0) {
      rotateVar = Math.PI;
    } else {
      rotateVar = 0;
    }

    console.log(rotateCounter);
    console.log(rotateVar);
  }
  console.log(event.code);
}

// Animation Example
requestAnimationFrame(draw);

function draw() {
  frame++;
  // Request new draw frame
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  ctx.save();
  ctx.translate(cnv.width / 2, cnv.height / 2);
  ctx.rotate((rotateVar / 180) * (angle * angleAdder));
  ctx.drawImage(img1, -cnv.width / 2 - 125, -cnv.height / 2 - 120);
  if (angle == 360) {
    angle = 0;
  }
  if (anglecounter == 0) {
    angle++;
  } else {
    angle--;
  }
  ctx.rotate((Math.PI / 180) * -angle);
  ctx.restore();

  // Draw the circle using the object
  ctx.save();
  ctx.translate(cnv.width / 2, cnv.height / 2);
  ctx.rotate((rotateVar / 180) * (angle * angleAdder));
  for (let i = 0; i < particle.length; i++) {
    if (particle[i].x > 0 && particle[i].y > 0) {
      if (particle[i].xGrav > 0) {
        particle[i].xGrav *= -1;
      }
      if (particle[i].yGrav > 0) {
        particle[i].yGrav *= -1;
      }
    } else if (particle[i].x > 0 && particle[i].y < 0) {
      if (particle[i].xGrav > 0) {
        particle[i].xGrav *= -1;
      }
      if (particle[i].yGrav < 0) {
        particle[i].yGrav *= -1;
      }
    } else if (particle[i].x < 0 && particle[i].y > 0) {
      if (particle[i].xGrav < 0) {
        particle[i].xGrav *= -1;
      }
      if (particle[i].yGrav > 0) {
        particle[i].yGrav *= -1;
      }
    } else if (particle[i].x < 0 && particle[i].y < 0) {
      if (particle[i].xGrav < 0) {
        particle[i].xGrav *= -1;
      }
      if (particle[i].yGrav < 0) {
        particle[i].yGrav *= -1;
      }
    }
    particle[i].x += particle[i].xGrav;
    particle[i].y += particle[i].yGrav;
  }

  drawCircles(particle);
  ctx.restore();
  // Animate - updatate animation variable(s)
  for (let i = 0; i < particle.length; i++) {
    // rebound from middle
    if (
      particle[i].x <= 5 &&
      particle[i].x >= -5 &&
      particle[i].y <= 5 &&
      particle[i].y >= -5
    ) {
      particle[i].x = Math.random() * cnv.width - cnv.width / 2;
      particle[i].y = Math.random() * cnv.height - cnv.height / 2;
    }
  }

  requestAnimationFrame(draw);
}
