import React from 'react'
import './product detail.css'
import image from '../../assets/images/mobile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/button/button'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'



function ProductDetail() {
    let params = useParams()
    let baseUrl = "https://fakestoreapi.com/products/"
    let {data,loading,error}=useFetch(baseUrl+params.productId)

    let starCount =[]
    for (let i =1;i<data.rating?.rate;i++){
        starCount.push(i)
    }

    if(loading){
        return <h2>Loading ...</h2>
    }
    else if(error.errorOccured){
        return<h2>{`\n ${error.errorMessage}`}</h2>
    }
    else {
        return (
            <div className='product-detail-container'>
                <div className='img-container'>
                    <img src = {data.image} alt='product'></img>
                </div>
                <div className='product-detail'>
                    <h2 className='title'>{data.title}</h2>

                    <div className='row'>
                        <div className='rating-info'>
                            <div className='stars'>
                                {
                                    starCount.map((count)=>{
                                        return <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    })
                                }
                            </div>
                            <p className='count'> {data.rating?.count}</p>
                        </div>
                        <p className='price'>{data.price} ETB</p>
                    </div>

                
                    <div className='product-desc-holder'>
                        <h2 className='product-desc-title'>Product Description</h2>
                        <p className='discription'>{data.description}</p>
                    </div>
                    <Button text='Add To Cart'></Button>
                </div>
            </div>
        )
    }
}

export default ProductDetail