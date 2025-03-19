// obj04.js

//! 객체의 속성 존재 여부 확인
// : 객체에 존재하지 않는 속성에 접근: undifined
// > 조건문 + undifined 여부 확인

let obj = {
  name: '이승아',
  age: 30,
  job: 'developer'
}

if (obj.name !== undefined) {
  console.log(obj.name);
} else {
  console.log('name 속성 x');
}

// +) 조건문을 연산자로 검증
// 논리연산자
// 1) or 연산자: 하나라도 true면 true
console.log(' === or 연산자 === ');
obj.name || console.log('name 속성 x'); // x
obj.hobby || console.log('hobby 속성 x'); // hobby 속성 x

// 2) and 연산자: 모두 true면 true
obj.name && console.log('name 속성 o'); // name 속성 o
obj.hobby && console.log('name 속성 o'); // x

//# 삼항연산자
// : 객체의 기본 속성 지정

obj.name = obj.name ? obj.name : '비회원 고객';
console.log(obj.name); // 이승아

obj.nickname = obj.nickname ? obj.nickname : '임시 닉네임';
console.log(obj.nickname); // 임시 닉네임

// >> 논리연산자로 변환
obj.name = obj.name || '이름 설정';
obj.height = obj.height || '키설정';

console.log(obj.name); // 이승아
console.log(obj.height); // 키설정