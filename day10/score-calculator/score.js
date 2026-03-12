let input = prompt("점수를 입력하세요.");
console.log(input);
let score = Number(input);
let grade = "";
let status = "";
let message ="";

if (score >= 100) {
    grade = "S";
    console.log("S");
} else if (score >= 90 && score < 100) {
    grade = "A";
    console.log("A");
} else if (score >= 80 && score < 90) {
    grade = "B";
    console.log("B");
} else if (score >= 70 && score < 80) {
    grade = "C";
    console.log("C");
} else if (score >= 60 && score < 70) {
    grade = "D";
    console.log("D");
} else if (score < 60) {
    grade = "F";
    console.log("F");
}

var num = 100;
if (num >= 60) {
    status = "Pass";
    console.log("Pass");
} else {
    status = "Fail";
    console.log("Fail");
}

switch(grade) {
    case "S":
        message ="Super!!";
        console.log("Super!!");
        break;
    case "A":
        message = "Excellent work!";
        console.log("Excellent work!");
        break;
    case "B":
        message = "Good job!";
        console.log("Good job!");
        break;
    case "C":
        message = "Satisfactory performance.";
        console.log("Satisfactory performance.");
        break;
    case "D":
        message = "Needs improvement.";
        console.log("Needs improvement.");
        break;
    case "F":
        message = "Please try harder!";
        console.log("Please try harder!");
        break;
}

const maxScore = 100;

if (score + 5 <= 100) {
    score += 5;
} 

console.log("Final socre: ", score);
console.log("Grade: ", grade);
console.log("Status: ", status);
console.log("Message: ", message);