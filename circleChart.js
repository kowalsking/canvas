var data = [100, 50, 60, 70, 20];

var canvas = document.getElementById('circleChart');
var c = canvas.getContext('2d');

c.fillStyle = 'white';
c.fillRect(0,0,500,500);

var colors = ['orange', 'green', 'blue', 'yellow', 'teal'];
var total = data.reduce((a,b) => a+b);

var prevAngle = 0;
data.forEach( (item,i) => {
    var fraction = item/total;
    var angle = prevAngle + fraction*Math.PI*2;

    c.fillStyle = colors[i];
    var grad = c.createRadialGradient( 250, 250, 10, 250, 250, 100);
    grad.addColorStop(0, 'white');
    grad.addColorStop(1, colors[i]);
    c.fillStyle = grad;

    c.beginPath();
    c.moveTo(250, 250);
    c.arc(250, 250, 100, prevAngle, angle, false);
    c.lineTo(250, 250);

    c.fill();

    c.strokeStyle = 'black';
    c.stroke();

    prevAngle = angle;
})

c.fillStyle = 'black';
c.font = '24pt sans-serif';
var text = 'Sales Data from 2025';
var metrics = c.measureText(text);
c.fillText(text, 250-metrics.width/2, 400);