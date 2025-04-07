import { useUsersStore } from '@/stores/user.store'
import React from 'react'

//! store 저장소 파일 생성
// src 폴더 내에 stores 폴더 생성
// : 해당 폴더 내부에서 전역 상태 관리할 상태들을 구분하여 파일 생성

// 명명규칙) 데이터명.store.ts 파일

function Zustand02() {
  const {users, addUser} = useUsersStore();

  const handleCreate = () => {
    addUser({
      id: 1,
      name: '윤영서'
    });
  }

  return (
    <div>
      {users.map(user => (
        <div>
          {user.id} / {user.name}
        </div>
      ))}

      <button onClick={() => handleCreate()}>사용자 추가</button>
    </div>
  )
}

export default Zustand02