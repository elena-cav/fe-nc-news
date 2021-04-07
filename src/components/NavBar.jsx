import React, { Component } from 'react';
import { Link } from '@reach/router';
import { StyledNavBar } from '../styled/navbar';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as MenuBtn } from '../images/menu-btn.svg';
import { ReactComponent as CloseBtn } from '../images/times-solid.svg';

import * as api from '../utils/api';

class Nav extends Component {
  state = {
    topics: [],
    isActive: true
  };
  componentDidMount() {
    api.fetchTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  openMenu = () => {
    this.setState({isActive: !this.state.isActive});

  };

  render() {
    const { topics } = this.state;

    return (


      <StyledNavBar isActive={this.state.isActive}>
        <header>
          <p className="nav-btn" id="nav-btn" onClick={this.openMenu}>
           <MenuBtn/>
          </p>
          <nav className={`navbar${this.state.isActive ? ' navbar--open' : ''}`}>
            <div className="navbar-header">
              <span className="nav-close" id="nav-close" onClick={this.openMenu}>
                
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
                    <li className='nav-link'>
                      <Link key={slug} to={`/${slug}/articles`}>
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
