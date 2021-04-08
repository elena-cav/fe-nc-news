import React from 'react'
import {StyledHeader} from '../styled/header'
import { Link } from '@reach/router';
import { ReactComponent as MenuBtn } from '../images/menu-btn.svg';


function Header({openMenu}) {
  return (
    <StyledHeader>
      <p className="nav-btn" id="nav-btn" onClick={openMenu}>
           <MenuBtn/>
          </p>
      <Link to={'/'}><h2>NC News</h2> </Link>
      <h4 className='loggedin-user'>
        jessjelly
      </h4>
    </StyledHeader>
    
  )
}

export default Header
