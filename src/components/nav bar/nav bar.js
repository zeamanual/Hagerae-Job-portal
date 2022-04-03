import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './nav bar.css'
import { CartContext } from '../../context/cart context'

function NavBar() {
    let cartContextData = useContext(CartContext)
    return (
        <nav>
        <h2 className='title'>Demo Product Store Using External API </h2>
        <div  className='nav-cart-container'>
            <FontAwesomeIcon className='icon' icon={faCartShopping}></FontAwesomeIcon>
            <p className='count'>{cartContextData.cartData.count}</p>
        </div>
        </nav>
    )
}

export default NavBar