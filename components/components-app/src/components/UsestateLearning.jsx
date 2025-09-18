import React from 'react'
import { useState } from 'react'

const UsestateLearning = () => {
    const [name,setName] = useState('')
  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
    <h1>Hello,{name}</h1>
    </div>
  )
}

export default UsestateLearning
