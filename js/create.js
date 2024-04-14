function createSnake() {
    const snake = document.createElement("div");
    snake.classList.add("snake");
    containerGame.append(snake);
}

function createPoint() {

    const pointElem = document.createElement("div");
    pointElem.classList.add("point");

    const pointTop = Math.floor(Math.random() * (maxHeight / snakeHeight)) * snakeHeight;
    const pointLeft = Math.floor(Math.random() * (maxWidth / snakeWidth)) * snakeWidth;
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