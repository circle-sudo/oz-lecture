const STAR = "*";
const MAX_STAR = 10;

// 화살표 함수
const getPromptInput = () => {

    let input;
    let isNotValid = true;

    while (isNotValid) {

        let inputStr = prompt("출력할 별 갯수를 입력하세요 (1~10)");
        input = Number(inputStr);

        if (isNaN(input) || input < 1 || input > MAX_STAR) {
            console.log("오류! 1~10 사이 숫자를 입력하세요.");
            continue;
        }

        isNotValid = false;
        break;
    }

    return input;
}

// 함수 표현식 + 기본값
const printStar = function(count = 1) {

    var stars = "";

    for (let i = 0; i < count; i++) {
        stars += STAR;
    }

    console.log(stars);
}

// ...rest parameter 사용
function printMultipleStars(...numbers) {

    for (let index in numbers) {
        printStar(numbers[index]);
    }
}

// 실행
const input = getPromptInput();

// 기본 출력
printStar(input);

// 추가 출력 (rest parameter 예시)
printMultipleStars(1, 2, 3);