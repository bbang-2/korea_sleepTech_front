// mathModule.js: 모듈정의

// 사칙연산 함수 정의
// : 각 함수는 인자값 2개를 받아 연산 후 반환

export function add(a, b) {
  return a + b;
}

export default function substract (a, b) {
  return a - b;
}

export let multiply = function(a, b) {
  return a * b;
}

export let divide = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    console.log('0으로 나눌 수 없습니다.');
  }
}