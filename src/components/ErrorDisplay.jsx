import React from 'react'

function ErrorDisplay({status, msg}) {
  return (
    <p>{status} - {msg}</p>
    
  )
}

export default ErrorDisplay
