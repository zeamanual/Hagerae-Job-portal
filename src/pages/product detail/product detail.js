import React from 'react'
import './product detail.css'
import image from '../../assets/images/mobile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/button/button'


function ProductDetail() {
    let img = image
    let title='iphone 13 pro max'
    let price = 34.56
    let rating = 4.5
    let count = 459
    let description='this product is one of the most wanted products in this world without any question'

    let starCount =[]
    for (let i =1;i<rating;i++){
        starCount.push(i)
    }
  return (
    <div className='product-detail-container'>
        <div className='img-container'>
            <img src = {img}></img>
        </div>
        <div className='product-detail'>
            <h2 className='title'>{title}</h2>

            <div className='row'>
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

           
            <div className='product-desc-holder'>
                <h2 className='product-desc-title'>Product Description</h2>
                <p className='discription'>{description}</p>
            </div>
            <Button text='Add To Cart'></Button>
        </div>
    </div>
  )
}

export default ProductDetail