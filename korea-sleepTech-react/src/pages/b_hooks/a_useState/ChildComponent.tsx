import React from "react";
import { UserType } from "./UseState06";

type ChilddProps = {
  userData: UserType | undefined;
};

function ChildComponent({ userData }: ChilddProps) {
  return (
    <div>
      <p>자식 컴포넌트(부모로부터 데이터를 전달 받음)</p>
      {userData && (
        // JSX내에서 소괄호 내의 UI구현부가 비워질 경우 오류
        // + 단일 루트 노드 생성 필수!!
        <>
          <p>사용자 이름: {userData.username}</p>
          <p>사용자 키: {userData.height}</p>
        </>
      )}
    </div>
  );
}

export default ChildComponent;
