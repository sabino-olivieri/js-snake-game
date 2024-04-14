function createSnake() {
    const snake = document.createElement("div");
    snake.classList.add("snake");
    containerGame.append(snake);
}

function createPoint() {

    const pointElem = document.createElement("div");
    pointElem.classList.add("point");
    let positionOK;
    
    let pointTop, pointLeft;
    
    do{

        positionOK = true;
        pointTop = Math.floor(Math.random() * (maxHeight / snakeHeight)) * snakeHeight;
        pointLeft = Math.floor(Math.random() * (maxWidth / snakeWidth)) * snakeWidth;
        bodySnake.forEach(element => {
            if(element.offsetTop === pointTop && element.offsetLeft === pointLeft) {
                console.log("posizione uguale");
                positionOK = false;
            }
        });

    } while (!positionOK);


    pointElem.style.left = pointLeft + "px";
    pointElem.style.top = pointTop + "px";
    containerGame.append(pointElem);

    timeoutPoint();

}

function createBody() {
    const bodyElem = document.createElement("div");
    const point = document.querySelector(".point");
    bodyElem.classList.add("snake-body");
    bodyElem.style.left = tailLeft + "px";
    bodyElem.style.top = tailTop + "px";
    bodySnake.push(bodyElem);
    containerGame.append(bodyElem);

}

function createMessage() {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerHTML = `<h2>Hai perso</h2>
    Hai realizzato ${bodySnake.length - 1} punti.`
    containerGame.append(message);
    startElem.classList.add("opacity0");
    newGameElem.classList.remove("opacity0");
}

function newGame() {
    startElem.classList.remove("opacity0");
    newGameElem.classList.add("opacity0");
    haveLose = false;
    gameStarted = false;

    bodySnake.forEach(element => {
        element.remove();
    });

    resetPress();
    document.querySelector(".message").remove();
    document.querySelector(".point").remove();
    bodySnake = [];
    createSnake();
    bodySnake.push(document.querySelector(".snake"));
}