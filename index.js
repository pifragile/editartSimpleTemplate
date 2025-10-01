// example
const canvas = document.createElement("canvas");
canvas.id = "myCanvas";
// Use innerWidth and innerHeight if you want the screen format rather than a square. 
canvas.width = Math.min(window.innerWidth, window.innerHeight);
canvas.height = Math.min(window.innerWidth, window.innerHeight);
canvas.style.zIndex = 8;
canvas.style.position = "absolute";

const body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function drawArt() {
    // example
    const width = Math.min(window.innerWidth, window.innerHeight);
    const height = Math.min(window.innerWidth, window.innerHeight);
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = `rgba(${randomM0() * 255}, ${randomM0() * 255}, ${
        randomM0() * 255
    }, 1)`;

    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "rgba(0, 255, 0, 1)";
    ctx.fillRect(m1 * width, m2 * height, m3 * width * 0.5, m4 * height * 0.5);
    triggerPreview();
}
