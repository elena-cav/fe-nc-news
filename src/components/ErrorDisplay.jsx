import React from 'react'
import { Link } from '@reach/router';
import {StyledError} from '../styled/error'
import Travolta from '../images/travolta.gif'

function ErrorDisplay({status, msg}) {
  return (
    <StyledError>
    <h2>{status} - {msg}</h2>
    <img className='main-img' src={Travolta} alt="animated gif of John Travolta looking around"/>
    <h3>You can navigate to the <Link to={'/'}>homepage</Link> to find your way back 😉</h3>
    </StyledError>
  )
}

export default ErrorDisplay
