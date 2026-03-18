const max_time = 10;
const min_time = 1;
let timerCount;
var timerMessage = "";

const timerInput = document.querySelector("#timerInput");
const srartTimer = document.querySelector("startTimer");
const timerDisplay = document.querySelector("timerDisplay");

button.addEventListener("click", function () {

    const seconds = Number(input.value);

    if (!isNaN(seconds) && seconds >= 1 && seconds <= 10) {

        let count = seconds;

        display.textContent = `타이머: ${count}초`;

        const timer = setInterval(function () {

            count--;

            if (count > 0) {
                display.textContent = `타이머: ${count}초`;
            } else {
                clearInterval(timer);
                display.textContent = "타이머 종료!";
            }

        }, 1000);

    }

});