// E_JSX.tsx

import { describe } from 'node:test'
import React from 'react'

function E_JSX() {
  // https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_1280.jpg

  const cat = {
    catUrl: 'https://cdn.pixabay.com/photo/',
    description: '2019/11/08/11/56/',
    imageId: 'kitten-4611189_1280.jpg',
    name: '아기고양이',
    imageTheme: {
      width: '200px',
      hieght: ' 150px'
    },
    theme: {
      backgroundColor: 'black',
      color: 'white'
    }
  }

  return (
    <>
      <div style={cat.theme}>
        <p>{cat.name}'s Picture</p>
        <img 
          src={cat.catUrl + cat.description + cat.imageId} 
          alt={cat.name}
          width={cat.imageTheme.width}
          height={cat.imageTheme.hieght}
        />
      </div>
    </>
  )
}

export default E_JSX