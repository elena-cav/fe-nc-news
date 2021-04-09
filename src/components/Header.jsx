import React from 'react'
import {StyledHeader} from '../styled/header'
import { Link } from '@reach/router';
import { ReactComponent as MenuBtn } from '../images/menu-btn.svg';
import { ReactComponent as User } from '../images/user-solid.svg';


function Header({openMenu}) {
  return (
    <StyledHeader>
      <p className="nav-btn" id="nav-btn" onClick={openMenu}>
           <MenuBtn/>
          </p>
      <h2><Link to={'/'}>NC News </Link></h2>
      
        <Link className='loggedin-user' to={'/user/jessjelly'}> <User/> jessjelly
</Link>
      
    </StyledHeader>
    
  )
}

export default Header
