const containerGame = document.querySelector(".container-game");

createSnake();
const snakeElem = document.querySelector(".snake");
let bodySnake = [];
bodySnake.push(snakeElem);
const startElem = document.querySelector(".start-btn");
const newGameElem = document.querySelector(".new-game");

const snakeWidth = bodySnake[0].offsetWidth;
const snakeHeight = bodySnake[0].offsetHeight;

const maxWidth = containerGame.offsetWidth - snakeWidth;
const maxHeight = containerGame.offsetWidth - snakeHeight;


let timeRight;
let timeDown;
let timeLeft;
let timeUp;

let timeout;

let rightPress = false;
let downPress = false;
let leftPress = false;
let upPress = false;

let tailTop = 0;
let tailLeft = 0;

let headTop = 0;
let headLeft = 0;

let haveLose = false;

let gameStarted = false;

window.addEventListener("keydown", (event) => {
    const keyPress = event.code;
    console.log(keyPress);
    
    // freccia destra
    if (keyPress === "ArrowRight" && !rightPress && !leftPress && gameStarted) {

        resetTime();
        resetPress();
        rightPress = true;

        moveRight();
        

        timeRight = setInterval(moveRight, 500);

    }

    // freccia giù
    if (keyPress === "ArrowDown" && !downPress && !upPress && gameStarted) {

        resetTime();
        resetPress();
        downPress = true;

        moveDown();
        

        timeDown = setInterval(moveDown, 500);

    }

    // freccia sinistra
    if (keyPress === "ArrowLeft" && !leftPress && !rightPress && gameStarted) {

        resetTime();
        resetPress();

        leftPress = true;
        
        moveLeft();

        timeLeft = setInterval(moveLeft, 500);

    }

    // freccia su
    if (keyPress === "ArrowUp" && !upPress && !downPress && gameStarted) {

        resetTime();
        resetPress();

        upPress = true;
        moveUp();

        timeUp = setInterval(moveUp, 500);

    }
});

startElem.addEventListener("click", () => {
    if(!gameStarted){
        createPoint();
        gameStarted = true;
        const rightArrowEvent = new KeyboardEvent('keydown', {
            key: 'ArrowRight',
            keyCode: 39,
            code: 'ArrowRight',
            which: 39,
            bubbles: true
        });
    
        document.dispatchEvent(rightArrowEvent);
    }
    
    
});

newGameElem.addEventListener("click", () => {
    newGame();
});
