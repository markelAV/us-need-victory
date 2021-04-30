var countAllElementCarousel = 0;
var countMovedElementCarousel = 0;
const countOnPageElementCarousel = 5;
window.onload = function () {
    countAllElementCarousel = document.getElementById("listCards").childElementCount;
};
window.addEventListener('scroll', function () {
    let arrowTop = document.getElementById("arrowTop");
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});


function up() {
    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
}

function hello() {
    alert("Привет");
}

function moveCarouselToLeft() {
    if (countMovedElementCarousel > 0) {
        countMovedElementCarousel--;
        let listCards = document.getElementById("listCards");
        listCards.style.marginLeft = -19 * countMovedElementCarousel + "vw";

        let buttonRight = document.getElementById("buttonRight");
        buttonRight.disabled = false;
        if (countMovedElementCarousel <= 0) {
            let buttonLeft = document.getElementById("buttonLeft");
            buttonLeft.disabled = true;
        }
    }
    else {
        let buttonLeft = document.getElementById("buttonLeft");
        buttonLeft.disabled = true;

    }
}

function moveCarouselToRight() {
    if (countAllElementCarousel - countMovedElementCarousel > countOnPageElementCarousel) {
        countMovedElementCarousel++;
        let listCards = document.getElementById("listCards");
        listCards.style.marginLeft = -19 * countMovedElementCarousel + "vw"; //FIXME please 19 - is hardcode - width of card and her margin-left

        let buttonLeft = document.getElementById("buttonLeft");
        buttonLeft.disabled = false;
        if (countAllElementCarousel - countMovedElementCarousel <= countOnPageElementCarousel) {
            let buttonRight = document.getElementById("buttonRight");
            buttonRight.disabled = true;
        }
    }
    else {
        let buttonRight = document.getElementById("buttonRight");
        buttonRight.disabled = true;
    }


}
//Todo animation complete
function moveCarousel(valueMove, koef) {
    //let listCards = document.getElementById("listCards");
    // listCards.style.marginLeft = valueMove * countMovedElementCarousel + "vw"; //FIXME please 19 - is hardcode - width of card and her margin-left
    let start = Date.now(); // запомнить время начала
    let valueMoved = valueMove;
    let timer = setInterval(function () {
        // сколько времени прошло с начала анимации?
        let timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer); // закончить анимацию через 2 секунды
            return;
        }

        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        valueMoved += 0.5 * koef;
        drawMoveCarousel(valueMoved, listCards);

    }, 20);

}

function drawMoveCarousel(valueMove, element) {
    element.style.marginLeft = valueMove + "vw";
}
