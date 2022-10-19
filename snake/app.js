// window.addEventListener('load', snake);
const currentScoreMsg = document.querySelector('.score__current>h2>span');
const bestScoreMsg = document.querySelector('.score__best>h2>span');
const scoreContainer = document.querySelector('.score');
const message = document.querySelector('.message');
const gameBoardArr = [...document.getElementById('container').children].slice();
const newGameBtn = document.getElementById('ng-btn');

let currentScore = 0;
let bestScore = 0;
let snakeSpeed = 300;


newGameBtn.addEventListener('click', (ev) => {
    snake();
    newGameBtn.disabled = true;
});

function snake() {

    const container = [...document.getElementById('container').children];
    const gameBoard = [];
    let isFoodEaten = true;
    let moveDirections = 'right';
    message.textContent = '';
    currentScore = 0;
    currentScoreMsg.textContent = currentScore;

    while (container.length) gameBoard.push(container.splice(0, 10));

    const snake = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 }
    ];


    document.addEventListener('keydown', (ev) => {
        if (ev.key == 'ArrowLeft') moveDirections = moveDirections == `right` ? 'right' : 'left';
        if (ev.key == 'ArrowRight') moveDirections = moveDirections == `left` ? 'left' : 'right';
        if (ev.key == 'ArrowUp') moveDirections = moveDirections == `down` ? 'down' : 'up';
        if (ev.key == 'ArrowDown') moveDirections = moveDirections == `up` ? 'up' : 'down';
    });

    function renderSnake() {
        gameBoardArr.forEach(f => f.classList.remove('snake'));
        //Clear all fields with class 'snake'

        snake.forEach(s => {
            gameBoard[s.y][s.x].className = `snake`;
        }); // render snake;

        if (isFoodEaten) {
            renderFood();
        }// render food if food is eaten
    }

    function moveSnake() {
        let snakeHead = snake[snake.length - 1];
        let snakeTail = snake[0];

        function isSnakeGrow() {
            snakeHead = snake[snake.length - 1];

            if (gameBoard[snakeHead.y][snakeHead.x].className == 'food') {
                snake.unshift(snakeTail);
                isFoodEaten = true;
                currentScore += 10;
                currentScoreMsg.textContent = currentScore;
            } else if (gameBoard[snakeHead.y][snakeHead.x].className == 'snake') {
                gameOver();
            }
        }


        if (moveDirections == 'right' && snakeHead.x < 9) {
            snake.shift();
            snake.push({ x: snakeHead.x + 1, y: snakeHead.y });
            isSnakeGrow();
            return;
        } else if (moveDirections == 'left' && snakeHead.x > 0) {
            snake.shift();
            snake.push({ x: snakeHead.x - 1, y: snakeHead.y });
            isSnakeGrow();
            return;
        } else if (moveDirections == 'down' && snakeHead.y < 9) {
            snake.shift();
            snake.push({ x: snakeHead.x, y: snakeHead.y + 1 });
            isSnakeGrow();
            return;
        } else if (moveDirections == 'up' && snakeHead.y > 0) {
            snake.shift();
            snake.push({ x: snakeHead.x, y: snakeHead.y - 1 });
            isSnakeGrow();
            return;
        }

        gameOver();
    }

    function gameOver() {
        clearInterval(interval);
        message.textContent = `Game Over! Your result is ${currentScore}`;

        if (currentScore > bestScore) {
            bestScore = currentScore;
            bestScoreMsg.textContent = bestScore;
        }
        // isFoodEaten = false;
        currentScoreMsg.textContent = currentScore;
        scoreContainer.style.display = 'block';
        newGameBtn.disabled = false;
        gameBoardArr.forEach(f => f.classList.remove('food'));
        return;
    }

    function renderFood() {

        function createFood() {
            const getRandomInt = () => Math.floor(Math.random() * 10);

            return {
                x: getRandomInt(),
                y: getRandomInt()
            }
        }

        let food = createFood();

        while (gameBoard[food.y][food.x].className == 'snake') {
            food = createFood();
        }

        gameBoard[food.y][food.x].className = 'food';
        isFoodEaten = false;
        return;
    }

    const interval = setInterval(() => {
        moveSnake();
        renderSnake();
    }, snakeSpeed);
}

