import React from 'react'

const Profile = (props) => {
  return (
    <div className='profile-page'>
        <h1 className='username'>{props.user.displayName}</h1>
        <img src={props.user.photoURL} className='pfp'/>
        <h2 className='last-sign-in'>Last Sign In: {props.user.metadata.lastSignInTime}</h2>
    </div>
  )
}

export default Profile