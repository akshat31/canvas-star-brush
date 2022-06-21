/** @type {CanvasRenderingContext2D} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

ctx.strokeStyle = 'yellow'
ctx.lineWidth = 10;
ctx.shadowBlur = 10;
ctx.shadowColor = 'green';
let hue = 0;

function drawShape (x, y, radius, inset, n) {
    ctx.fillStyle = `hsl(${hue}, 50%, 50%)`;
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.moveTo(0, 0 - radius)
    for (let i = 0; i < n; i++) {
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (radius * inset));
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - radius);
    }
    ctx.restore();
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

drawShape (100, 0.5, 6);

window.addEventListener('mousemove', (e) => {
    hue+=8
    drawShape(e.x, e.y, 100, 0.5, 6)
})