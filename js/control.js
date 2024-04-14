function resetPress() {
    if (rightPress) { rightPress = false; }
    if (leftPress) { leftPress = false; }
    if (upPress) { upPress = false; }
    if (downPress) { downPress = false; }

}

function resetTime() {

    if (rightPress) {
        clearInterval(timeRight);    }

    if (leftPress) {
        clearInterval(timeLeft);    }

    if (downPress) {
        clearInterval(timeDown);    }

    if (upPress) {
        clearInterval(timeUp);    }

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
            haveLose = true;
            resetTime();

            gameStarted = false;
            clearTimeout(timeout);

            break;
        }
    }

    if (bodySnake[0].offsetTop === pointElem.offsetTop && bodySnake[0].offsetLeft === pointElem.offsetLeft) {
        clearTimeout(timeout);
        createBody();
        removePoint();
        createPoint();
    }
}