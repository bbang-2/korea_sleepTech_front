// I_Handler.tsx

//? cf) vite react 개발환경 실행: npm run dev
// : 브라우저에서 http://localhost:5174/ 실행

//? rfce: react functional component export
import React, { useState } from 'react'

/*
  ! React 이벤트 핸들러 (handle: 다루다)
  : 사용자와 상호작용을 처리하기 위한 함수

  - UI(사용자 인터페이스)에서 발생하는 이벤트에 반응하여 동작되는 기능을 정의

*/

//# 자식 컴포넌트
// : 부모 컴포넌트에서 속성(props)으로 문자열 message의 값과
//     , 해당 컴포넌트 태그들 사이에 내용을 전달 받음

interface ConsoleProps {
  message: string;
  children: React.ReactNode; // HTML 요소 + 사용자 정의 컴포넌트
}

// props로 전달 받은 내용을 구조 분해 할당
function ConsoleButton({message, children}: ConsoleProps) {

  // JSX의 이벤트 핸들러
  // : on 속성
  // - on + 이벤트 종류 (lowerCamelCase)
  // ex) onClick, onChange, onSubmit 등
  return (
    <button onClick={() => console.log(`${message}`)}>
      {children}
    </button>
  )
}

//? 자식 컴포넌트
// : 부모 컴포넌트에서 사용, 부모로부터 count 값을 전달바당 UI로 출력
function ChildComponent({ count }: { count: number }) {
  return(
    <p style={{color: 'orange'}}>
      {count}
    </p>
  )
}

//? 자식 컴포넌트(이벤트 핸들러를 props로 전달 받음)
interface ButtonProps {
  children: React.ReactNode;
  onButtonClick: () => void; // 매개변수x, 반환값x
}
function ButtonComponent({ children, onButtonClick }: ButtonProps) {
  // onClick 이벤트 속성에 부모로 부터 전달 받은 핸들러 등록
  //! JSX 속성에 직접 연결할 이벤트 핸들러: on-
  return (
    <button onClick={onButtonClick}>
      {children}
    </button>
  )
}

//# 부모 컴포넌트
function I_Handler() {
  const [count, setCount] = useState<number>(0);

  // 이벤트 핸들러 (컴포넌트x, 일반 함수)
  function handleButtonClick() {
    console.log('버튼을 클릭하였습니다.');
  }

  // 자식 요소로 전달 될 이벤트 핸들러
  const buttonHandler = () => {
    //! 핸들러 자체를 변수로 사용하거나 다른 요소에 전달 할 때: -handler
    console.log('버튼 클릭');
  }

  return(
    <div>
      <ConsoleButton message='A를 동작'>
        A를 동작 시키는 버튼(Children - ReactNode)
      </ConsoleButton>
      <ConsoleButton message='B를 동작'>
        B를 동작 시키는 버튼(Children - ReactNode)
      </ConsoleButton>

      <hr />
      {/* 
        - 이벤트 핸들러: 이벤트에 반응하는 함수!
        - on 속성: 해당 요소에서 일어나는 이벤트를 감지하는 속성

        >> 이벤트 핸들러 함수는 호출 x, 등록 되어야 함
      */}

      <button onClick={handleButtonClick}>
        클릭1(이벤트 핸들러 등록)
      </button>

      <button onClick={function() {
        console.log('버튼 클릭');
      }}>
        클릭2(함수를 직접 정의)
      </button>
      
      <button onClick={() => console.log('button click')}>
        클릭3(화살표 함수를 직접 정의)
      </button>

      <hr />
      {/* 부모 컴포넌트(증가, 감소 버튼으로 count 값 변경) */}
      {/* 속성에서 함수를 직접 정의하는 경우 '화살표 함수 사용 권장' */}
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <ChildComponent count={count} />

      {/* 
        이벤트 핸들러 & props
        : 이벤트 핸들러를 props로 전달 (함수를 props로 전달)

        cf) 이벤트 핸들러 명명 규칙(권장 사항)
        1) on- 시작 
          : on 다음에 이벤트 설명 키워드 작성
          EX) onSignUpButtonClick, onIncermentClick, onInputChange

        2) -handler 끝
          : 이벤트 동작 이름 + handler
          EX) clickHandler, signUpSubmitHandler, mouseEnterHandler 등
      */}

      <hr />

      <ButtonComponent onButtonClick={buttonHandler}>
        이벤트 핸들러 (기능 전달)
      </ButtonComponent>

      {/* 
        cf) form요소의 submit 이벤트
            : 기본 동작으로 새로고침의 동작을 가짐
      */}
      <form onSubmit={(e) => {
        // 기본동작 방지
        e.preventDefault();
        console.log('전송완료');
      }}>
        <input type="text" />
        <button type='submit'>전송</button>
      </form>
    </div>
  )
}

export default I_Handler