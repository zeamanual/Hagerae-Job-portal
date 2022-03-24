import React from 'react'
import './product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/button'
import { Link,useNavigate } from 'react-router-dom'
function Product({key,pId,img,title,price,rating,count}) {
    let starCount =[]
    let navigate = useNavigate()
    for (let i =1;i<rating;i++){
        starCount.push(i)
    }

    let clickHandler =()=>{
        navigate(`/product/${pId}`)
    }
  return (
    <div className='product' onClick={clickHandler}>
        <div className='img-container'>
            <img src={img} alt='product' className='img'></img>
        </div>
        <div className='description'>
            <h2 className='title'>{title}</h2>
          
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
            <Button text='Add To Cart'></Button>
            
        </div>
    </div>
  )
}

export default Product