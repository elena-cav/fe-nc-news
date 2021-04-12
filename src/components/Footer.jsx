import React from 'react';
import { ReactComponent as Linkedin } from '../images/linkedin-brands.svg';
import { ReactComponent as Github } from '../images/github-brands.svg';
import {StyledFooter} from '../styled/footer'
function Footer() {
  return (
<StyledFooter>  
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/elenacavallero"
            className="social-icon"
          >
            <Linkedin/>
          </a>
          <a href="https://github.com/elena-cav" className="social-icon">
            <Github/>
          </a>
        </div>
        <h4 className="footer-text">
          COPYRIGHT {new Date().getFullYear()} © Elena Cavallero
        </h4>
      
</StyledFooter>    
  )
}


export default Footer;
