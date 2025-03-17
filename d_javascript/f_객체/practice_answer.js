//& 1. 객체 생성

let person = {
  name: '이승아',
  age: '29',
  isStudent: false
}

console.log(person);

//& 2. 배열 사용

let fruits = ['Banana', 'Orange', 'Apple'];
console.log(fruits[1]);

//& 3. 함수 정의

function add (a,b) {
  return a + b;
}

console.log(add(3, 4));

//? 문제 2
console.log('=== 문제 2 ===');

//& 1. 객체 탐색

for (let key in person) {
  // (let 변수명 in 객체명)
  // : 객체를 순회하며 객체의 키(key)들을 변수에 할당
  console.log(`${key}: ${person[key]}`);
}

//* for in 반복문

let array = [1, 2, 3, 4, 5];
for (let num in array) {
  // (let 변수명 in 객체명)
  // : 배열을 순회하며 각 요서의 인덱스를 변수에 할당

  // 배열의 요소에 접근: 배열명[인덱스값]
  console.log(array[num]);
}

//& 2. 배열 메서드(배열 내장 함수) 사용

let fruitsUpperCase = fruits.map(fruit => fruit.toUpperCase());
console.log(fruitsUpperCase);

let upperCaseFruits = fruits.map(function(value, indexs, array) {
  // 반환되는 새로운 배열에는 이전 배열의 요소값을 대문자로 변환하여 저장
  return value.toUpperCase();
});

console.log(upperCaseFruits);

// cf) 배열 메서드의 콜백 함수는 주로 화살표 함수 형태 사용


//& 3. 함수 활용

let arr1 = [1, 2, 3];
let arr2 = [4 ,5 ,6];

function combinedArrays(arr1, arr2) {
  // arr1을 전체 순회: 각 요소의 값과 그 요소의 인덱스 번호 추출
  // >> 인덱스 번호값을 통해 동일한 index
  let result = arr1.map((element, index) => {
    return element + arr2[index];
  });

  return result;
}

console.log(combinedArrays(arr1, arr2));

//& 1. 객체 깊은 복사

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let personCopy = deepCopy(person);

personCopy.name = '이도경';
console.log(person);

let person2 = JSON.parse(JSON.stringify(person));
console.log(person2);

//& 2. 배열과 객체를 활용한 데이터 처리
const users = [
  { name: "Jhon", age: 25},
  { name: "Jabne", age: 17},
  { name: "Doe", age: 18}
];

function adultUserNames (users) {
  return users.filter(user => user.age >= 18)
              .map(user => user.name)
};

console.log(adultUserNames(users));