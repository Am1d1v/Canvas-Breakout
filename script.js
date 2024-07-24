

const rulesButton = document.querySelector('#btn-rules');
const rules = document.querySelector('#rules');
const closeRulesButton = document.querySelector('#btn-close');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');


// Create ball props
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4
};

// Create paddle
const paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    width: 80,
    height: 10,
    speed: 8,
    dx: 0
};

// Draw ball on canvas
function drawBall(){
    context.beginPath();
    context.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    context.fillStyle = '#000';
    context.fill();
    context.closePath();
};
drawBall();

// Draw paddle on canvas
function drawPaddle(){
    context.beginPath();
    context.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    context.fillStyle = '#000';
    context.fill();
    context.closePath();
}
drawPaddle();

// Show Rules
rulesButton.addEventListener('click', () => rules.classList.add('show'));

// Hide Rules
closeRulesButton.addEventListener('click', () => rules.classList.remove('show'));

