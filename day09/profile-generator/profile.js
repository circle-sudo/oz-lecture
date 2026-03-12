var name = "정기찬";         

let age = 22;                  

const isStudent = true;        

let emptyValue = null;        

let notDefined;                

const uniqueId = Symbol("id"); 

const bigNumber = 12345678901234567890n; 

let profileText = "이름:\t" + name + "\n나이:\t" + age;
console.log("프로필 정보");
console.log(profileText);

let intro = "안녕하세요 저는 " + name + "이고 나이는 " + age + "살입니다.";
console.log(intro);

let hobbies = ["coding", "gaming", "business"];
console.log("My hobbies: " + hobbies.join(", "));

let profile = {
    name: "정기찬",
    age: 22,
    isStudent: true,
    goal: "1인 유니콘 기업 창업"
};
console.log("제 이름은 " + profile.name + "이고 목표는 " + profile.goal + "이고 제나이는" + profile.age + "살 입니다.");
console.log("name 타입:", typeof name);
console.log("hobbies 타입:", typeof hobbies);
console.log("profile 타입:", typeof profile);