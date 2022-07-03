import React,{useContext} from 'react'
import { CartContext } from '../../context/cart context'
import Button from '../../components/button/button'
import './cart.css'
function Cart() {
  let cartContextData = useContext(CartContext)

  let removeHandler=(id)=>{
    let newCartData = cartContextData.cartData.products.filter(product=>{
      return product.id!==id
    })
    let newCount = newCartData.length
    cartContextData.setCartData({
      count:newCount,
      products:newCartData
    })

  }
  if(cartContextData.cartData.products.length<1){
    return <div className='message-container'>
      <p className='message'>No Item Found In Your Cart</p>
    </div>
  }
  
  let totalPrice =0
  cartContextData.cartData.products.forEach((product)=>{
    totalPrice+=product.price
  })

  return (
    <div className='cart-container'>
    <div className='inner-container'>
      <p className='total-price'> Total Price: {totalPrice} ETB</p>
          {
            cartContextData.cartData.products.map(product=>{
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
                  <div className='btn-container' onClick={()=>{
                    removeHandler(product.id)
                  }} >
                    <Button  className='remove-btn' text="Remove"></Button>
                  </div>
                  

                </div>
            </div>
              )
            })
          }
    </div>
     
     <Button id='#checkout-btn' text='Procced To CheckOut'></Button>
    </div>
  )
}

export default Cart