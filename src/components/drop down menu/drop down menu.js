import React from 'react'
import './drop down menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


function DropDownMenu({options,main_title}) {
    options=['All','Jwlleries','Clothes','Electronics','Books']
    main_title='Browse By Categories'

  return (
    <div className='drop-menu-container'>
        <div className='drop-menu-inner-container'>
            <p className='title'>{main_title} <FontAwesomeIcon className='icon' icon={faArrowDown}></FontAwesomeIcon> </p>
            <div className='menu-items'>
                {
                    options.map(option=>{
                            return <p className='option'>{option}</p>
                    })
                }
            </div>
        </div>

    </div>
  )
}

export default DropDownMenu