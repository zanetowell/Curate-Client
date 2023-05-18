import React from 'react'
import { login, logout } from '../services/firebase'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className='nav'>
        <Link to='/'>
            <div className='nav-title'>Curate</div>
        </Link>
        <ul>
            {
                props.user ?
                <>
                <li>Welcome, {props.user.displayName}</li>
                <li><img src={props.user.photoURL} alt={props.user.displayName}/></li>
                <li onClick={logout}>Logout</li>
                <Link to='/topics'>Dashboard</Link>
                </>
                :
                <li onClick={login}>Login</li>
            }
        </ul>
    </nav>
  )
}

export default Nav