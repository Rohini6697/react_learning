import React from 'react'

const Home = (props) => {
  const list = [
    {id : 1,
      name : 'apple'
    },
    {
      id : 2,
      name : 'mango'
    },
    {
      id : 3,
      name : 'banana'
    }
  ]
  return (
    <div>
        <h1>hello,{props.username}</h1>
        <ul>
          {
            list.map((fruits) => (
              <li key={fruits.id}>{fruits.name}</li>
            ))
          }
        </ul>
      
    </div>
  )
}

export default Home
