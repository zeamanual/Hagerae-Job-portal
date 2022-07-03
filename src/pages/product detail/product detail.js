import React,{ useContext } from 'react'
import './product detail.css'
import { CartContext } from '../../context/cart context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/button/button'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import addToCartHandler from '../../helpers/add to cart handler'
import Loading from '../../components/loading/loading'
import ErrorP from '../../components/error/error'


function ProductDetail() {
    let params = useParams()
    let alreadyAdded=false
    let baseUrl = "https://fakestoreapi.com/products/"
    let {data,loading,error}=useFetch(baseUrl+params.productId)
    let cartContextData=useContext(CartContext)
    let starCount =[]
    for (let i =1;i<data.rating?.rate;i++){
        starCount.push(i)
    }
    cartContextData.cartData.products.forEach(product=>{
        if(product.id===data.id){
            alreadyAdded=true
        }
    })
    if(loading){
        return <Loading></Loading>
    }
    else if(error.errorOccured){
        return <ErrorP message={error.errorMessage}></ErrorP>
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
                                        return <FontAwesomeIcon key={count} icon={faStar}></FontAwesomeIcon>
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
                    <div  className={alreadyAdded ? 'added cart-btn-container':'cart-btn-container'}
                     onClick={()=>{
                addToCartHandler(cartContextData,{pId:data.id,img:data.image,title:data.title,price:data.price})
                }}
                >
                        <Button text='Add To Cart'></Button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ProductDetail