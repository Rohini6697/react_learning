import React from 'react'

const Profile = (props) => {
  return (
    <div>
        <h2>name : {props.details.name}</h2>
        <h2>age : {props.details.age}</h2>
        <h2>hobby : {props.details.hobby}</h2>
      
    </div>
  )
}

export default Profile
