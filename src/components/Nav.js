import React from 'react'
import { login, logout } from '../services/firebase'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
        <Link to='/'>
            <div className='nav-title'>Curate</div>
        </Link>
        <ul>
            <li onClick={login}>Login</li>
            <li onClick={logout}>Logout</li>
        </ul>
    </nav>
  )
}

export default Nav