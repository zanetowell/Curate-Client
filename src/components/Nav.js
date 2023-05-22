import React, {useState} from 'react'
import { login, logout } from '../services/firebase'
import { Link } from 'react-router-dom'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { GrDown, GrVolume } from "react-icons/gr";
import Lofi from './Lofi';

const Nav = (props) => {

  const [listening, setListening] = useState(false)

  const handleClick = (evt) => {
    setListening(prevState => !prevState)
    
  }

  return (
    <nav className='nav'>
        <Link to='/' className='nav-title'>
            <div>Curate</div>
        </Link>
          <div className='lofi-icon' onClick={handleClick}>
            <GrVolume id='lofi-btn'/>
          </div>
          {listening ? <Lofi /> : null}
            {
                props.user ?
                <div className='nav-drop'>
                    <p className='nav-user-greeting'>Welcome, {props.user.displayName}</p> 
                <MDBDropdown>
                  <MDBDropdownToggle tag='p' className='btn btn-primary' id='drop-toggle'>
                    <img src={props.user.photoURL} alt={props.user.displayName}className='nav-user-img'/>
                    <GrDown className='drop-btn'/>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem className='drop-item'><Link to='/' className='drop-link'>Profile</Link></MDBDropdownItem>
                    <MDBDropdownItem className='drop-item'><Link to='/topics' className='drop-link'>Topics Dashboard</Link></MDBDropdownItem>
                    <MDBDropdownItem className='drop-item'><Link to='/cards' className='drop-link'>Cards Dashboard</Link></MDBDropdownItem>
                    <MDBDropdownItem className='drop-item'><Link to='/' className='drop-link'>Archives</Link></MDBDropdownItem>
                    <MDBDropdownItem divider className='drop-item'/>
                    <MDBDropdownItem onClick={logout} className='drop-item' id='logout-btn'>Logout</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                </div>
                :
                <h2 onClick={login} className='login-btn'>Login</h2>
            }
    </nav>
  )
}

export default Nav