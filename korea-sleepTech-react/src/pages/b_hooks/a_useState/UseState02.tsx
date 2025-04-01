// UseState02.tsx
import React, { useState } from 'react'

//! useState: '컴포넌트 내에서' 데이터에 대한 상태 관리
// - 주로 UI에서 발생하는 이벤트에 반응하여 상태 변화

function UseState02() {
  // == useState 훅 == //
  const [inputValue, setInputValue] = useState<string>('');
  return (
    <div>
      <p style={{color: "lightcoral"}}>useState & 이벤트 핸들러</p>
    </div>
  )
}

export default UseState02