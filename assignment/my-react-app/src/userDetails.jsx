import React from 'react'
import './App.css';
function UserDetails(props) {
  return (
    <div className="userCss">
      <p>name:{props.data.name}</p>
      <p>email:{props.data.email}</p>
    </div>
  )
}

export default UserDetails
