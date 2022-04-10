import React from 'react'

import './error.css'
function ErrorP({message}) {
  return (
    <div className='error-container'>
        <p>{message}</p>
    </div>
  )
}

export default ErrorP