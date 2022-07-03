import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './nav bar.css'
import { CartContext } from '../../context/cart context'
import Button from '../button/button'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    let navigate = useNavigate()
    let clickHandler=(path)=>{
        if(path==='CART'){
            navigate('/cart')
        }else if(path ==='PRODUCT'){
            navigate('/')
        }
    }
    let cartContextData = useContext(CartContext)
    return (
        <nav>
        <h2 className='title'>Demo Product Display Using External API </h2>
        <div  className='nav-btn-container'>
            <div className='home-btn-container' onClick={()=>{clickHandler('PRODUCT')}}>
                <Button text='Home' ></Button>
            </div>
            
            <FontAwesomeIcon className='icon' icon={faCartShopping} onClick={()=>{clickHandler('CART')}} ></FontAwesomeIcon>
            <p className='count'>{cartContextData.cartData.count}</p>
        </div>
        </nav>
    )
}

export default NavBar