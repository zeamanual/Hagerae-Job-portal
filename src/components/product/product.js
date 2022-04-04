import React,{useContext} from 'react'
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/button'
import { CartContext } from '../../context/cart context'
import addToCartHandler from '../../helpers/add to cart handler'
import { Link,useNavigate } from 'react-router-dom'
import nameResizer from '../../helpers/name resizer'

function Product({key,pId,img,title,price,rating,count}) {
    let starCount =[]
    let cartContextData = useContext(CartContext)
    let navigate = useNavigate()
    for (let i =1;i<rating;i++){
        starCount.push(i)
    }

    let clickHandler =()=>{
        navigate(`/product/${pId}`)
    }
    if(title.length>40){
        title=nameResizer(title,39)
    }

  return (
    <div className='product' >
        <div className='img-container' onClick={clickHandler}>
            <img src={img} alt='product' className='img'></img>
        </div>
        <div className='description'onClick={clickHandler} >
            <h2  className='title'>{title}</h2>
          
            <div className='rating-info'>
                <div className='stars'>
                    {
                        starCount.map((count)=>{
                            return <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        })
                    }
                </div>
         
                <p className='count'> {count}</p>
            </div>
            <p className='price'>{price} ETB</p>
            
        </div>
        <div  className='btn-holder' onClick={()=>{
                addToCartHandler(cartContextData,{pId,img,title,price})
                }}>
            <Button text='Add To Cart'></Button>
        </div>

    </div>
  )
}

export default Product