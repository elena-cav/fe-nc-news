import React from 'react'
import { Link } from '@reach/router';
import {StyledError} from '../styled/error'
import Travolta from '../images/travolta.gif'

function ErrorDisplay({status, msg}) {
  return (
    <StyledError>
    <h2>{status} - {msg}</h2>
    <img className='main-img' src={Travolta} alt="animated gif of John Travolta looking around"/>
    <div className='btn-wrapper'>
     <Link className='err-btn' to={'/new-topic'}>Post new Topic</Link>  
      <Link className='err-btn' to={'/'}>Back to Home</Link>
      </div>
    </StyledError>
  )
}

export default ErrorDisplay
