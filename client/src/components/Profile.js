import React from 'react'

function Profile({ user }) {
    const { name } = user
    console.log(user)
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default Profile