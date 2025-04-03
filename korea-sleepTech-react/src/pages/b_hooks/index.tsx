import React from 'react'
import UseState01 from './a_useState/UseState01';
import UseState02 from './a_useState/UseState02';
import UseState03 from './a_useState/UseState03';
import UseState04 from './a_useState/UseState04';
import UseState05 from './a_useState/UseState05';
import UseState06 from './a_useState/UseState06';
import UseStatePractice from './a_useState/Practice';
import UseRef01 from './b_useRef/UseRef01';
import UseRef02 from './b_useRef/UseRef02';
import UseRefPractice from './b_useRef/Practice';
import UseEffect01 from './c_useEffect/UseEffect01';
import UseEffect02 from './c_useEffect/UseEffect02';
import UseCallback from './d_useCallback_useMemo/UseCallback';
import UseMemo from './d_useCallback_useMemo/UseMemo';
import ReactMemo from './d_useCallback_useMemo/ReactMemo';
import UseReducer01 from './e_useReducer/UseReducer01';
import UseReducer02 from './e_useReducer/UseReducer02';
import Custom01 from './f_customHook/Custom01';
import Custom02 from './f_customHook/Custom02';
import TodoAppLocalStorage from './z_todo/TodoAppLocalStorage';
import Practice01 from './Practice01';

const h2Style = {
  backgroundColor: "black",
  color: "orange",
};

function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        === 리액트 Hooks ===
      </h1>
      <h2 style={h2Style}>리액트 Hooks - 웹캠 앱 구현</h2>
      <div style={{
        margin: '20px auto',
        padding: '10px',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <Practice01 />
      </div>

      <h2 style={h2Style}>리액트 Hooks - Todo 앱 구현</h2>
      <div style={{
        margin: '20px auto',
        padding: '10px',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <TodoAppLocalStorage />
      </div>

      <h2 style={h2Style}>리액트 Hooks - 커스텀 훅</h2>
      <Custom01 /> <hr />
      <Custom02 /> <hr />


      <h2 style={h2Style}>리액트 Hooks - useReducer</h2>
      <UseReducer01 /> <hr />
      <UseReducer02 /> <hr />

      <h2 style={h2Style}>리액트 Hooks - useCallback & useMemo</h2>
      <UseCallback /> <hr />
      <UseMemo /> <hr />
      <ReactMemo /> <hr />

      <h2 style={h2Style}>리액트 Hooks - useEffect</h2>
      <UseEffect01 /> <hr />
      <UseEffect02 /> <hr />

      <h2 style={h2Style}>리액트 Hooks - useRef </h2>
      <UseRef01 /> <hr />
      <UseRef02 /> <hr />
      <UseRefPractice /> <hr />

      <h2 style={h2Style}>리액트 Hooks - useState</h2>
      <UseState01 /> <hr />
      <UseState02 /> <hr />
      <UseState03 /> <hr />
      <UseState04 /> <hr />
      <UseState05 /> <hr />
      <UseState06 /> <hr />
      <UseStatePractice /> <hr />
    </div>
  )
}

export default Index