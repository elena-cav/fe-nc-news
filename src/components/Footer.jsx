import React from 'react';
import { ReactComponent as Linkedin } from '../images/linkedin-brands.svg';
import { ReactComponent as Github } from '../images/github-brands.svg';
import {StyledFooter} from '../styled/footer'
function Footer() {
  return (
<StyledFooter>  
        <div class="social-icons">
          <a
            href="https://www.linkedin.com/in/elenacavallero"
            class="social-icon"
          >
            <Linkedin/>
          </a>
          <a href="https://github.com/elena-cav" class="social-icon">
            <Github/>
          </a>
        </div>
        <h4 class="footer-text">
          COPYRIGHT {new Date().getFullYear()} © Elena Cavallero
        </h4>
      
</StyledFooter>    
  )
}


export default Footer;
