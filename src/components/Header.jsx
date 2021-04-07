import React from 'react'
import {StyledHeader} from '../styled/header'
import { ReactComponent as MenuBtn } from '../images/menu-btn.svg';

function Header({openMenu}) {
  return (
    <StyledHeader>
      <p className="nav-btn" id="nav-btn" onClick={openMenu}>
           <MenuBtn/>
          </p>
      <h2>NC News</h2>
      <span className='loggedin-user'>
        <p>jessjelly</p>
      </span>
    </StyledHeader>
    
  )
}

export default Header
