import React from 'react'
import {StyledHeader} from '../styled/header'
function Header() {
  return (
    <StyledHeader>
      <h2>NC News</h2>
      <span className='loggedin-user'>
        <p>jessjelly</p>
      </span>
    </StyledHeader>
    
  )
}

export default Header
