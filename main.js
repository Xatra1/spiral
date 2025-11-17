const ctx = document.getElementById("canvas").getContext("2d"),
  canvas = ctx.canvas,
  keySequence = [];
//const incrementString = document.getElementById('increment');

let increment = 0,
  add = 1,
  centerX,
  centerY,
  width,
  height,
  color = "0, 255, 0",
  secret;

setInterval(() => {
  if (add) {
    increment <= 9.43 ? increment += .00025 : add = 0;
  } else {
    increment >= -9.43 ? increment -= .00025 : add = 1;
  }
  //incrementString.textContent = `Increment: ${increment}`
}, 1);

function spiral() {
  if (canvas.width != innerWidth || canvas.height != innerHeight) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }

  width = canvas.width;
  height = canvas.height;
  centerX = width / 2;
  centerY = height / 2;
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.fillRect(0, 0, width, height);

  draw(`rgba(${color}, 0.7)`, 5);
  if (secret == "purple") draw("rgba(255, 255, 255, 0.7)", 5);

  setTimeout(() => {
    requestAnimationFrame(spiral);
  }, 1000 / 60);
}

function draw(color, num) {
  ctx.moveTo(centerX, centerY);
  ctx.beginPath();

  for (i = 0; i < innerHeight; i++) {
    angle = increment * i;
    x = centerX + (num * angle) * Math.cos(angle);
    y = centerY + (num * angle) * Math.sin(angle);
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = color;
  ctx.stroke();
}

document.addEventListener("keypress", (e) => {
  keySequence.push(e.key);
  const keyString = keySequence.join("");

  if (keyString.match(/purple/i) == "purple") {
    color = "255, 0, 255";
    secret = "purple";
  }

  switch (e.key) {
    case "1":
      color = "255, 0, 0";
  }
});

spiral();
