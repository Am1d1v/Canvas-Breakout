

const rulesButton = document.querySelector('#btn-rules');
const rules = document.querySelector('#rules');
const closeRulesButton = document.querySelector('#btn-close');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');


// Score
let score = 0;

const brickRowCount = 9;
const brickColumnCount = 6;

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

// Brick props
const brickInfo = {
    width: 70,
    height: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true
};

// Create bricks
const bricks = [];
for(let i = 0; i < brickRowCount; i++){
    bricks[i] = [];
    for (let j = 0; j < brickColumnCount; j++) {
        const x = i * (brickInfo.width + brickInfo.padding) + brickInfo.offsetX;
        const y = j * (brickInfo.height + brickInfo.padding) + brickInfo.offsetY;
        bricks[i][j] = {x, y, ...brickInfo};
    }
}

// Draw ball on canvas
function drawBall(){
    context.beginPath();
    context.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    context.fillStyle = '#000';
    context.fill();
    context.closePath();
};

// Draw paddle on canvas
function drawPaddle(){
    context.beginPath();
    context.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    context.fillStyle = '#000';
    context.fill();
    context.closePath();
}

// Draw scores
function drawScores(){
    context.font = '20px Arial'
    context.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// Draw bricks on canvas
function drawBricks(){
    bricks.forEach(column => {
        column.forEach(brick => {
            context.beginPath();
            context.rect(brick.x, brick.y, brick.width, brick.height);
            context.fillStyle = brick.visible ? '#000' : 'transparent';
            context.fill();
            context.closePath();
        })
    });
}

// Draw canvas elements
function draw(){
    drawBall();
    drawPaddle();
    drawScores();
    drawBricks();
}

// Move canvas paddle
function movePaddle(){
    paddle.x += paddle.dx;

    // Wall detection
    if(paddle.x + paddle.width > canvas.width) paddle.x = canvas.width - paddle.width;
    if(paddle.x < 0) paddle.x = 0;
}

// Update canvas elements
function update(){
    draw();

    movePaddle();

    requestAnimationFrame(update);
}
update();

// Keydown event
function keyDown(event){
    if(event.key === 'ArrowRight') paddle.width += paddle.speed;
}

// Keyup event
function keyUp(event){
    
}

// Keyboard events
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// Show Rules
rulesButton.addEventListener('click', () => rules.classList.add('show'));

// Hide Rules
closeRulesButton.addEventListener('click', () => rules.classList.remove('show'));

