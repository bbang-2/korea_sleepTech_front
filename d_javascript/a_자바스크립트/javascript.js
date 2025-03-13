// 자바스크립트 파일 확장자: .js

// cf) 주석
// : ctrl + /

// cf) javascript(js)의 주석 슬래시(/) 2개
/*
  js의 여러줄 주석
*/

// # 간단한 JS 예제 //

// 기능
// : 버튼을 클릭하면 새로운 이름을 입력받는 창이 생성
//    , 작성된 이름으로 버튼 내의 Player 명을 변경

// 현재 웹 문서에서 button 태그를 찾아 저장
const button = document.querySelector('button');

// 저장된 변수에 클릭 이벤트를 추가
button.addEventListener('click', updateName);

// updateName: 새로운 이름을 입력받고 버튼을 수정하는 기능
function updateName() {
  const name = prompt('새로운 이름을 입력해주세요.');
  button.textContent = `Player 1: ${name}`;
}