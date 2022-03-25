import React,{useContext} from 'react'
import { CartContext } from '../../context/cart context'
import img from '../../assets/images/mobile.jpg'
import Button from '../../components/button/button'
import './cart.css'
function Cart() {
  let cartData = useContext(CartContext)
  let cartTempData = {
    count:1,
    products:[
      {
        img,
        title:"iphone 13 pro max",
        price:24
      },
      {
        img,
        title:"samsung galaxy s21 ultra",
        price:32

      }
    ]
  }
  return (
    <div className='cart-container'>
      {
        cartTempData.products.map(product=>{
          return (
          <div className='product-info'>
            <div className='img-container'>
              <img src={product.img} alt='product'></img>
            </div>
            <div className='detail-container'>
              <div className='product-detail'>
                <h2 className='product-title'>{product.title}</h2>
                <p className='product-price'>{product.price} ETB</p>
              </div>
              <Button className='remove-btn' text="Remove"></Button>

            </div>
        </div>
          )
        })
      }
     <Button id='#checkout-btn' text='Procced To CheckOut'></Button>
    </div>
  )
}

export default Cart