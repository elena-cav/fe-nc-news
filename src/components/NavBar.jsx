import React, { Component } from 'react';
import { Link } from '@reach/router';
import { StyledNavBar } from '../styled/navbar';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as CloseBtn } from '../images/times-solid.svg';

import * as api from '../utils/api';

class Nav extends Component {
  state = {
    topics: [],
  };
  componentDidMount() {
    api.fetchTopics().then((topics) => {
      this.setState({ topics });
    });
  }


  render() {
    const {isActive, openMenu } = this.props;
    const {topics} = this.state

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
            </div>
          </nav>
        </header>
      </StyledNavBar>
    );
  }
}

export default Nav;
