import React, {useState} from 'react'
import { login, logout } from '../services/firebase'
import { Link } from 'react-router-dom'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

const Nav = (props) => {
  return (
    <nav className='nav'>
        <Link to='/' className='nav-title'>
            <div>Curate</div>
        </Link>
            {
                props.user ?
                <div className='nav-drop'>
                    <p className='nav-user-greeting'>Welcome, {props.user.displayName}</p> 
                <MDBDropdown>
                  <MDBDropdownToggle tag='p' className='btn btn-primary' id='drop-toggle'>
                    <img src={props.user.photoURL} alt={props.user.displayName}className='nav-user-img'/>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem className='drop-item'><Link to='/' className='drop-link'>Profile</Link></MDBDropdownItem>
                    <MDBDropdownItem className='drop-item'><Link to='/topics' className='drop-link'>Dashboard</Link></MDBDropdownItem>
                    <MDBDropdownItem className='drop-item'><Link to='/' className='drop-link'>Archives</Link></MDBDropdownItem>
                    <MDBDropdownItem divider className='drop-item'/>
                    <MDBDropdownItem onClick={logout} className='drop-item' id='logout-btn'>Logout</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                </div>
                :
                <li onClick={login}>Login</li>
            }
    </nav>
  )
}

export default Nav