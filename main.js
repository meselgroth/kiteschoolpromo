(function () {
    function scrollElement(selector) {
        window.scrollTo(0, document.querySelector(selector).getBoundingClientRect().top);
    }
    function elementTop(id) {
        return document.getElementById(id).getBoundingClientRect().top;
    }
    function scrollDown() {
        window.scrollTo(0, currentX);
        currentX++;
        if (currentX >= targetX) {
            clearInterval(scrollInterval);
        }
    }
    function scrollUp() {
        window.scrollTo(0, currentX);
        currentX--;
        if (currentX <= targetX) {
            clearInterval(scrollInterval);
        }
    }
    function animateScroll(x) {
        clearInterval(scrollInterval);
        targetX = x;
        var scrollFn;
        if (targetX < currentX) {
            scrollFn = scrollUp;
        }
        else {
            scrollFn = scrollDown;
        }
        scrollInterval = setInterval(scrollFn, 1);
    }

    var targetX;
    var currentX = 1;
    var scrollInterval = null;
    var scrollWebsite = true;
    var positionIndex = 0;
    var scrollPositions;

    window.addEventListener("load", function (event) {
        scrollPositions = [0, elementTop('website'), 5000];
        setInterval(function () { animateScroll(scrollPositions[0]); }, 120 * 1000);

        setTimeout(function () {
            setInterval(function () { animateScroll(scrollPositions[1]); }, 120 * 1000);
        }, 90 * 1000);
        setTimeout(function () {
            setInterval(function () { animateScroll(scrollPositions[2]); }, 120 * 1000);
        }, 100 * 1000);
    });


})();

