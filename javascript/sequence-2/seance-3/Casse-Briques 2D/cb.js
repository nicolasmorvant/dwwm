/*ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(100, 100, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();*/

var canvas = document.querySelector("#canva");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

//Pour le radius de la balle afin de détecter les collisions
var ballRadius = 10; 

//Raquette
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

//Contrôle de la raquette
var rightPressed = false;
var leftPressed = false;

//Brique
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;


var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
}


//Création de la raquette
function drawPaddle()
{
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

//Création de la balle
function drawBall()
{
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

//FONCTION PRINCIPALE
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height); //reinitialisation
    drawBall();
    drawPaddle();
    x += dx;
    y += dy;
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius)
    {
        dx = -dx;
    }
    if(y + dy < ballRadius)
    {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius)
    {
        if(x > paddleX && x < paddleX + paddleWidth)
        {
            dy = -dy-1;
        }
        else
        {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
    }
    
    if(rightPressed)
    {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width)
        {
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed)
    {
        paddleX -= 7;
        if (paddleX < 0)
        {
            paddleX = 0;
        }
    }    
} 

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

var interval = setInterval(draw, 5);
  

