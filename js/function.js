function createSnake() {
    const snake = document.createElement("div");
    snake.classList.add("snake");
    containerGame.append(snake);
}

function moveRight() {

    moveBody();
    if (bodySnake[0].offsetLeft >= maxWidth) {
        bodySnake[0].style.left = 0;
    } else {
        bodySnake[0].style.left = bodySnake[0].offsetLeft + snakeWidth + "px";
    }

    collision();

    headTop = bodySnake[bodySnake.length - 1].offsetTop;
    headLeft = bodySnake[bodySnake.length - 1].offsetLeft
}

function moveDown() {

    moveBody();
    if (bodySnake[0].offsetTop >= maxHeight) {
        bodySnake[0].style.top = 0;
    } else {
        bodySnake[0].style.top = bodySnake[0].offsetTop + snakeHeight + "px";

    }

    collision();

    headTop = bodySnake[bodySnake.length - 1].offsetTop;
    headLeft = bodySnake[bodySnake.length - 1].offsetLeft
}

function moveLeft() {
    moveBody();
    if (bodySnake[0].offsetLeft <= 0) {
        bodySnake[0].style.left = maxWidth + "px";
    } else {
        bodySnake[0].style.left = bodySnake[0].offsetLeft - snakeWidth + "px";
    }


    collision();
    headTop = bodySnake[bodySnake.length - 1].offsetTop;
    headLeft = bodySnake[bodySnake.length - 1].offsetLeft
}

function moveUp() {

    moveBody();
    if (bodySnake[0].offsetTop <= 0) {
        bodySnake[0].style.top = maxHeight + "px";
    } else {
        bodySnake[0].style.top = bodySnake[0].offsetTop - snakeHeight + "px";

    }

    collision();

    headTop = bodySnake[bodySnake.length - 1].offsetTop;
    headLeft = bodySnake[bodySnake.length - 1].offsetLeft
}

function resetPress() {
    if (rightPress) { rightPress = false; }
    if (leftPress) { leftPress = false; }
    if (upPress) { upPress = false; }
    if (downPress) { downPress = false; }

}

function resetTime() {

    if (rightPress) { clearInterval(timeRight); }

    if (leftPress) { clearInterval(timeLeft); }

    if (downPress) { clearInterval(timeDown); }

    if (upPress) { clearInterval(timeUp); }

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

function timeoutPoint() {
    timeout = setTimeout(() => {
        removePoint();
        createPoint();
    }, 10000);
}

function removePoint() {
    const pointElem = document.querySelector(".point");
    pointElem.remove();
}

function collision() {
    const pointElem = document.querySelector(".point");

    for (let i = 1; i < bodySnake.length; i++) {

        if (bodySnake[0].offsetTop === bodySnake[i].offsetTop && bodySnake[0].offsetLeft === bodySnake[i].offsetLeft) {

            console.log("hai perso");
            resetTime();
            gameStarted = false;
            clearTimeout(timeout);

        }
    }

    if (bodySnake[0].offsetTop === pointElem.offsetTop && bodySnake[0].offsetLeft === pointElem.offsetLeft) {
        clearTimeout(timeout);
        createBody();
        removePoint();
        createPoint();
    }
}

function createBody() {
    const bodyElem = document.createElement("div");
    const point = document.querySelector(".point");
    bodyElem.classList.add("snake-body");
    bodyElem.style.left = headLeft + "px";
    bodyElem.style.top = headTop + "px";
    bodySnake.push(bodyElem);
    containerGame.append(bodyElem);

}

function moveBody() {

    if (bodySnake.length === 2) {

        bodySnake[1].style.top = bodySnake[0].offsetTop + "px";
        bodySnake[1].style.left = bodySnake[0].offsetLeft + "px";
    }

    if (bodySnake.length > 2) {

        const positionBody = [];

        bodySnake.forEach(element => {
            const objectSnake = {
                top: element.offsetTop,
                left: element.offsetLeft,
            }
            positionBody.push(objectSnake);
        });

        for (let i = 1; i < bodySnake.length; i++) {

            bodySnake[i].style.top = positionBody[i - 1].top + "px";
            bodySnake[i].style.left = positionBody[i - 1].left + "px";

        }
    }

}