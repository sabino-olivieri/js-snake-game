function moveRight() {


    headLeft = (bodySnake[0].offsetLeft >= maxWidth) ? (0) : (bodySnake[0].offsetLeft + snakeWidth);

    collision();

    if (!haveLose) {
        moveBody();
        if (bodySnake[0].offsetLeft >= maxWidth) {
            bodySnake[0].style.left = 0;
        } else {
            bodySnake[0].style.left = headLeft + "px";
        }

        bodySnake[0].style.transform = "rotate(0deg)";

        // tailTop = bodySnake[bodySnake.length - 1].offsetTop;
        tailLeft = bodySnake[bodySnake.length - 1].offsetLeft;
    }
}

function moveDown() {

    headTop = (bodySnake[0].offsetTop >= maxHeight) ? (0) : (bodySnake[0].offsetTop + snakeHeight);

    collision();

    if (!haveLose) {
        moveBody();
        if (bodySnake[0].offsetTop >= maxHeight) {
            bodySnake[0].style.top = 0;
        } else {
            bodySnake[0].style.top = headTop + "px";

        }

        bodySnake[0].style.transform = "rotate(90deg)";

        tailTop = bodySnake[bodySnake.length - 1].offsetTop;
        // tailLeft = bodySnake[bodySnake.length - 1].offsetLeft;
    }
}

function moveLeft() {

    headLeft = (bodySnake[0].offsetLeft <= 0) ? (maxWidth) : (bodySnake[0].offsetLeft - snakeWidth);

    collision();

    if (!haveLose) {
        moveBody();
        if (bodySnake[0].offsetLeft <= 0) {
            bodySnake[0].style.left = maxWidth + "px";
        } else {
            bodySnake[0].style.left = headLeft + "px";
        }


        bodySnake[0].style.transform = "rotate(180deg)";

        // tailTop = bodySnake[bodySnake.length - 1].offsetTop;
        tailLeft = bodySnake[bodySnake.length - 1].offsetLeft;
    }
}

function moveUp() {

    headTop = (bodySnake[0].offsetTop <= 0) ? (maxHeight) : (bodySnake[0].offsetTop - snakeHeight);

    collision();

    if (!haveLose) {
        moveBody();
        if (bodySnake[0].offsetTop <= 0) {
            bodySnake[0].style.top = maxHeight + "px";
        } else {
            bodySnake[0].style.top = headTop + "px";

        }

        bodySnake[0].style.transform = "rotate(-90deg)";

        tailTop = bodySnake[bodySnake.length - 1].offsetTop;
        // tailLeft = bodySnake[bodySnake.length - 1].offsetLeft;
    }
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