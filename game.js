let canvas = document.getElementById('myCanvas');
let pen = canvas.getContext('2d');

let x = 20;
let y = 20;
let dx = 5;
let dy = 2

function drawCircle() {
    pen.beginPath()
    pen.arc(x, y, 20, 0, Math.PI * 2);
    pen.fillStyle = 'red';
    pen.fill();
    pen.closePath();
}

setInterval(
    function () {
        pen.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        drawCircle();
        if (x < 20 || x > canvas.clientWidth - 20) {
            dx = -dx;
        }
        if (y < 20 || y > canvas.clientHeight - 20) {
            dy = -dy;
        }
        x += dx;
        y += dy;
    },
    1000
)

