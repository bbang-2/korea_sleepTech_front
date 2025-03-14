// d_operation02.js

//! 4. 논리 연산자
// : 논리값을 연산(boolean 값을 반환)

// 1) AND 연산자(&&) - 논리곱
// : false가 하나라도 있으면 무조건! false

// true && true: true
// ture && true && false && true && ture: false

//? cf) 자바스크립트 '단락 평가'
// : 논리 연산에서 첫번째 피연산자 값만으로 해당 식의 결과가 확실 할 때, 두번째 걊은 평가하지 않는 것

// 2) OR 연산자(||) - 논리합
// : true가 하나라도! 있을경우 무조건! true

// true || true: true
// false || false || true || false || false: false

// 3) NOT 연산자(!) - 부정 논리
// : boolean 자료형의 데디터값 전환(!변수명)

let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true

console.log(!bool1); // false
console.log(!bool2); // true

//! 5. 삼항 (조건) 연산자
// : 유일하게 피 연산자를 3개 가지는 조건 연산자(기호가 2개)

//? 기본 구조
// 표현식 ? 참일경우 반환값1 : 거짓일 경우 반환값2

let age = 20;
let beverage = age >= 20 ? 'beer' : 'juice';
console.log(beverage); // beer

let isMember = false;
let discount = isMember ? '10%' : '5%';
console.log(discount);

// +) 삼항 연산자의 중첩
// : 조건의 계산 내에서 또 다른 조건의 계산이 이루어짐

age = 19;
let identity = age >= 20 ? '성인' : (age <= 13 ? '어린이' : '청소년');
console.log(identity);

//? 덧셈 연산자
// - 타입이 모두 숫자: 산술 연산의 덧셈
// - 타입이 하나라도 문자열 일 경우: 문자열의 결합
let name1 = '이';
let name2 = '승아';
console.log(name1 + name2);

//? typeof 연산자
// : 데이터에 대한 타입이 문자열로 반환
// >> number, string, boolean, undefined, object, function 등
console.log(typeof 123); // number
console.log(typeof '123'); // string

// +) 초기 JS 설계 결함으로 null 데이터의 타입은 object 반환
console.log(typeof null); // object
