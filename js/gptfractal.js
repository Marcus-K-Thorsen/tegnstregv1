/* write a fractal on a canvas */
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var drawFractal = function(x, y, size, depth) {
    if (depth === 0) {
        return;
    }
    ctx.fillRect(x, y, size, size);
    drawFractal(x, y, size / 3, depth - 1);
    drawFractal(x + size * 2 / 3, y, size / 3, depth - 1);
    drawFractal(x, y + size * 2 / 3, size / 3, depth - 1);
    drawFractal(x + size * 2 / 3, y + size * 2 / 3, size / 3, depth - 1);
};
drawFractal(0, 0, canvas.width, 5);
