import React from 'react'
import { PropagateLoader  } from 'react-spinners'
import './loading.css'

function Loading() {
  return (
    <div className='loading-container'>
        <PropagateLoader color='rgb(255, 196, 0)'></PropagateLoader>
    </div>
  )
}

export default Loading