window.onload = loadDocument;

function loadDocument() {
	var line = document.getElementById("line");
	line.onclick = drawLine;
	var circle = document.getElementById("circle");
	circle.onclick = drawCircle;
	var text = document.getElementById("text");
	text.onclick = drawText
	var draw = document.getElementById("draw");
	draw.onclick = drawImg;
	var clear = document.getElementById("clear");
	clear.onclick = clearCanvas
}

function drawLine() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(0, 0);
	ctx.lineTo(200, 100);
	ctx.stroke();
}

function drawCircle() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(95, 50, 40, 0, 2 * Math.PI);
	ctx.stroke();
}

function drawText() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.font = "30px Comic Sans MS";
	ctx.fillText("Hello World", 10, 50);
}

function drawImg() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("dedede");
	ctx.drawImage(img, 10, 10);
}

function clearCanvas() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	var w = canvas.width;
	canvas.width = 1;
	canvas.width = w;
}