import { Link } from '@reach/router';
import { StyledNavBar } from '../styled/navbar';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as CloseBtn } from '../images/times-solid.svg';
import React from 'react'

function Nav(props) {

const {isActive, openMenu, topics } = props;

  return (
     <StyledNavBar isActive={isActive}>
        <header>
          <nav className={`navbar${isActive ? ' navbar--open' : ''}`}>
            <div className="navbar-header">
              <span className="nav-close" id="nav-close" onClick={openMenu}>
                
               <CloseBtn/>
              </span>

              <ul className="nav-items">
                <li>
                  <Link className="nav-home nav-link" key={'homepage'} to={'/'}>
                     <HomeIcon /> 
                   
                  </Link>
                </li>
                {topics.map(({ slug }) => {
                  return (
                    <li key={slug} className='nav-link'>
                      <Link  to={`/${slug}/articles`}>
                        {slug}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className='post'>
                <Link to={'/new-topic'}>Post topic</Link>

              </div>
             
            </div>
          </nav>
        </header>
      </StyledNavBar>
    
  )
}

export default Nav


