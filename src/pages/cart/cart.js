import React,{useContext} from 'react'
import { CartContext } from '../../context/cart context'
import img from '../../assets/images/mobile.jpg'
import Button from '../../components/button/button'
import './cart.css'
function Cart() {
  let cartContextData = useContext(CartContext)
  console.log("in cart display",cartContextData)
//   let cartContextData ={ 
//     cartData :{
//     count:2,
//     products:[
//       {
//         id:1,
//         img,
//         title:"iphone 13 pro max",
//         price:24
//       },
//       {
//         id:2,
//         img,
//         title:"samsung galaxy s21 ultra",
//         price:32

//       }
//     ]
//   },
// }

  let removeHandler=(id)=>{
    let newCartData = cartContextData.cartData.products.filter(product=>{
      return product.id!=id
    })
    let newCount = cartContextData.count-1
    cartContextData.setCartData({
      count:newCount,
      products:newCartData
    })

  }

  return (
    <div className='cart-container'>
    <div className='inner-container'>
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