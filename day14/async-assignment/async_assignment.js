const max_time = 10;
const min_time = 1;

let timerCount;
var timerMessage = "";

// DOM 선택
const timerInput = document.querySelector("#timerInput");
const startTimer = document.querySelector("#startTimer");
const timerDisplay = document.querySelector("#timerDisplay");

// 버튼 클릭 이벤트
startTimer.addEventListener("click", function () {

    const seconds = Number(timerInput.value);

    // 유효성 검사
    if (!isNaN(seconds) && seconds >= min_time && seconds <= max_time) {

        let count = seconds;

        timerDisplay.textContent = `타이머: ${count}초`;

        const timer = setInterval(function () {

            count--;

            if (count > 0) {
                timerDisplay.textContent = `타이머: ${count}초`;
            } else {
                clearInterval(timer);
                timerDisplay.textContent = "타이머 종료!";
            }

        }, 1000);

    } else {
        timerDisplay.textContent = "유효한 숫자(1-10)를 입력하세요!";
    }

});