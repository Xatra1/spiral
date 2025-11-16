const ctx = document.getElementById('canvas').getContext('2d'),
    space = document.getElementById('space'),
    canvas = ctx.canvas;
//const incrementString = document.getElementById('increment');


var increment = 0,
    centerX,
    centerY,
    width,
    height,
    add = 1;

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

    draw(`rgba(0, 255, 0, 1)`, 5);

    setTimeout(() => {
        requestAnimationFrame(spiral)
    }, 1000 / 60);
}

function draw(color, num) {
    ctx.moveTo(centerX, centerY);
    ctx.beginPath();

    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, width, height);

    for (i = 0; i < innerHeight; i++) {
        angle = increment * i;
        x = centerX + (num * angle) * Math.cos(angle);
        y = centerY + (num * angle) * Math.sin(angle);
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = color;
    ctx.stroke();
}
spiral();
