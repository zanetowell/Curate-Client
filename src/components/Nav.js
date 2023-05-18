import React from 'react'
import { login, logout } from '../services/firebase'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className='nav'>
        <Link to='/' className='nav-title'>
            <div>Curate</div>
        </Link>
        <ul>
            {
                props.user ?
                <>
                <li className='nav-user-bar'>Welcome, {props.user.displayName}
                <img src={props.user.photoURL} alt={props.user.displayName}className='nav-user-img'/></li>
                <li onClick={logout}>Logout</li>
                <Link to='/topics' className='nav-dash-link'>Dashboard</Link>
                </>
                :
                <li onClick={login}>Login</li>
            }
        </ul>
    </nav>
  )
}

export default Nav