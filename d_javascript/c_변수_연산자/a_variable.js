// a_variable.js

//! 변수: 데이터를 저장하기 위한 공간

//* 필수 변수 명명규칙
// - 첫 문자로 영문자, _, $만 가능 (이후 숫자 사용 가능)
// - 띄어쓰기 허용 x
// - 영어 대소문자 구분 (num, Num은 각각 다른 변수)
// - 예약어 사용 x

// let 1num; - Error
// let num ber; - Error

//* 선택 변수 명명규칙
// - lowerCamelCase 사용 권장

// now, _now, now$25, now_25 (o)
// 25now, now 25, *now (x)

//? 올해 연도(currentYear), 태어난 연도(birthYear)
// 나이: age = currentYear - birthYear;

//! JS 변수 선언 방식 (2가지 - let, var)

// 1) 변수 선언 방법
// 변수종류 변수명;

// 2) 변수 할당(대입)
// 변수명 = 데이터(값);

// 3) 초기화: 변수종류 변수명 = 데이터(값);

// cf) Variable: 변수
let letVar;
var varVar;

letVar = 10;
varVar = 'Hello World';

letVar2 = 30; // 호이스팅 효과로 선언 전에 값 할당 가능
console.log(letVar2);

let letVar2 = 20;
var varVar2 = 'Hello Javascript';

//! let Vs var
// 1. 공통점: 재할당 가능(변수의 특성), 호이스팅 o

// cf) 호이스팅
//    : 인터프리터(코드를 읽는 기기)가 코드를 실행하기 전 변수, 함수, 클래스 등의 선언문을 해당 범위의 맨 위로 올리는 것

// 2. 차이점 
// - let: 동일한 영역 내에서 재선언 불가
// - var: 동일한 영역 내에서 재선언 가능