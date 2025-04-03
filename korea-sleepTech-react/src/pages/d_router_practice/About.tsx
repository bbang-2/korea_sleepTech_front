import React from 'react'
import { useLocation } from 'react-router-dom'

//! === useLocation 사용 ===
function About() {
  const location = useLocation();
  
  return (
    <div>
      <h2>About 소개 페이지</h2>
      <p>현재 경로: {location.pathname}</p>
      {/* 현재 경로: /router-practioc/about */}
    </div>
  )
}

export default About