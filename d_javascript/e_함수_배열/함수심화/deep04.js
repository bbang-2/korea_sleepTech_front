// deep04.js

//# JS의 내장 함수 - 콜백함수를 사용(고차함수) //

//! 타이머 함수
// : 특정 시간 이후에 함수를 실핼 OR 일정 간격으로 함수를 반복 실행 기능

// 1) setTimeout(콜백함수, 시간);
// : 지정된 시간 이후, 제공된 콜백함수를 단 한번만 실행

// cf) 시간 단위: 밀리초 (1s === 1000ms)

function greet(name = '이승아') {
  console.log(`Hello, ${name}`);
}

greet(); // Hello, 이승아

setTimeout(greet, 2000);

// cf) 함수호출: 함수명();
// setTimeout(함수명, 지연시간);
// : 호출부() 작성 시 코드를 읽는 즉시 함수 실행
setTimeout(greet, 3000);

// +) 콜백함수의 인자 전달은 세번째 인자부터 나열되는 값이 함수의 매개변수로 전달
setTimeout(greet, 3000, '이도경');

//? 익명함수 사용
setTimeout(function() {
  console.log('4초뒤에 실행됩니다.');
}, 4000);

setTimeout(() => {
  console.log('5초뒤에 실행됩니다.');
}, 5000);

// cf) 타이머 취소: clearTimer(타이머ID);
// >> setTimeout으로 설정한 타이머를 제거

// +) setTimeout()은 타이머 ID를 자동 반환
const timeId = setTimeout(greet, 2000, '이도경 :)');
console.log(timeId);
console.log('42번째 줄' + timeId);

clearTimeout(timeId);

//! setInterval(콜백함수, 시간);
// : '지정된 시간 긴격마다' 함수를 반복해서 실행
// >> 사용범: setTimeout과 유사

let count = 1;

let id = setInterval(() => {
  console.log(`3초마다 실행됩니다. ${count}번째`);
  count++
}, 3000); // 3초마다 실행

setTimeout(() => {
  console.log('타이머를 종료합니다.');
  clearInterval(id);
}, 15000); // 15초 이후 실행