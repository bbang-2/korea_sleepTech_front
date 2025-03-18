// event01.js

//! === 이벤트 정의 ===
// : 웹 페이지에서 발생하는 대부분의 일(사건)을 의미

//! === 이벤트 핸들링 (handle, 다루다)===
// : 특정 이벤트에 반응해서 특정 동작을 실행하는 것을 의미
// - 이벤트 핸들러(리스너): 특정 이벤트가 발생하면 호출되는 함수

//! JS의 이벤트 종류

// cf) 이벤트 핸들러 함수 정의
// : "랜덤 색상 생성 함수"
// : rgb(r, g, b) - 0 ~ 255까지의 정수가 각각 지정

//? random함수 정의: 0 ~ 255까지의 랜덤 숫자 생성
function random(number) {
  // 1. Math.random()
  // : 0이상 1미만의 부동 소수점 난수(실수의 무작위 값)를 생성하고 반환

  // 2. Math.floor()
  // : 괄호 안의 수를 내림하여 가장 가까운 정수를 생성하고 반환

  return Math.floor(Math.random() * (number + 1));
}

// ex) 0이상 101미만 정수를 생성
// : 0부터 N까지의 정수 생성 === Math.random() * (N + 1)
// console.log(Math.random()) // 0 <= x < 1
// console.log(Math.random() * 100); // 0 <= x < 100
// console.log(Math.random() * 101); // 0 <= x < 101

// console.log(Math.floor(Math.random() * 101));

//? randomColor 함수 정의: 랜덤 색상 생성
function randomColorFucn() {
  // 'rgb(r, g, b)' 형식과 동일
  // : r, g, b 에 각각 0부터 255까지의 무작위 정수 삽입
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

//# 1) HTML 이벤트 핸들러 속성(프로퍼티)
// : HTML 요소에 직접 이벤트 핸들러 속성을 지정
// - HTML 요소를 JS 객체로 가져와 핸들러 속성을 지정

// 웹문서.선택자를질문('선택자입력');
// : HTML 요소를 '참조'
const bgButton = document.querySelector('#bgChange');

// +) on- 키워드
/// : 이벤트 종류를 웹 문서의 요소에 연결시켜주는 키워드
// - HTML 요소에 함수를 할당하여 이벤트 연결
//    ex) onmouseover, onclick, onchange 등

bgButton.onclick = function() {
  const randomColor = randomColorFucn();

  // document.body.style.backgroundColor = randomColor;

  bgButton.style.backgroundColor = randomColor;
}

const keyDownSpan = document.querySelector('#keyDown');

window.onkeydown = function() {
  keyDownSpan.textContent = '안녕하세요 반갑습니다 :)'
}

//# 2) 인라인 이벤트 핸들러
// : HTML 태그에 직접 onclick, onkeydown 등을 이벤트 속성을 사용하여 함수 지정
// - 사용하지 않는 것을 권장 (유지보수와 코드 파싱에 어려움)

const textButton = document.querySelector('#textChange');

function textChangeFunc () {
  const randomColor = randomColorFucn();
  textButton.style.color = randomColor;
}

//& cf) JS내에서의 HTML 인식
// : 자바스크립트 객체로 인식
// - DOM(Document Object Model)으로 인식

// body > div > p > span 태그
/* 
  body {
    div: {
      p: {
        span:
      }
    }
  }
*/

// 1. document.querySelector('선택자');
// : 같은 선택자가 여러개일 경우 첫번쨰 요소만 가져옴

const btnButton = document.querySelector('.btn');
btnButton.onclick = function() {
  console.log('btn 요소 중 첫 번째 요소가 클릭되었습니다.');
}

// 2. document.querySelectorAll('선택자');
// : 여러 개의 요소 참조를 모두 가져와 한 번에 이벤트 핸들러 등록
// - 해당 참조값들이 배열(리스트)로 저장

const divs = document.querySelectorAll('div');

divs.forEach(div => div.onclick = function() {
  // 클릭 이벤트가 일어난 요소 그 자체
  this.style.backgroundColor = randomColorFucn();
});

//# 3) addEventListener 메서드
// : 표준 이벤트 모델
// : HTML 요소에 addEventListener 메서드를 사용하여 이벤트를 등록
// - 한 요소에 여러 개의 이벤트 핸들러 등록 가능

const btnsButton = document.querySelectorAll('.btnsChange');

// addEventListener() 은 인자로 이벤트와 콜백함수를 받음

btnsButton.forEach(btn => {
  // btn은 DOM 요소 (HTML 요소를 객체로 변환)
  btn.addEventListener('click', function(){ 
    const randomColor = randomColorFucn();
    btn.style.backgroundColor = randomColor;
  });
});

//! === 4. 이벤트 제거하는 방법 ===
// : removeEventListener() 메서드 사용
// - 이벤트 핸들러 제거
const removeButton = document.querySelector('#remove');

let removeChange = () => {
  const randomColor = randomColorFucn();
  removeButton.style.color = randomColor;
}

// 이벤트 리스너 등록
removeButton.addEventListener('click', removeChange);

// cf) 함수 호출 VS 함수 등록
// 함수 호출: 함수명()
//  >> 코드를 읽는 즉시 함수 실행
// 함수 등록: 함수명
//  >> 부가적인 발생, 함수를 전달하여 실행

// 이벤트 리스너 제거
removeButton.removeEventListener('click', removeChange);