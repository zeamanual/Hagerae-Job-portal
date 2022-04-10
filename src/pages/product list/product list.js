import React,{useState,useEffect} from 'react'
import ErrorP from '../../components/error/error'
import Loading from '../../components/loading/loading'
import Product from '../../components/product/product'

import useFetch from '../../hooks/useFetch'
import './product list.css'

function  ProductList() {
  let productsUrl = "https://fakestoreapi.com/products"

  let {loading,data,error}=useFetch(productsUrl)

  if(loading){
    return <Loading></Loading>
  }
  else if(error.errorOccured){
    return <ErrorP message={error.errorMessage}></ErrorP>
  }
  else {
      return (
        <div className='products'>
        <h2 className='title'>Product List</h2>
        <div className='product-list'>
        {
          data.map(product=>{
            return <Product key={product.id} title={product.title} img={product.image}
             price={product.price} rating={product.rating.rate} 
             count={product.rating?.count} pId={product.id}
                  ></Product>
          })
        }
        </div>

        </div>
    )
  }


}

export default ProductList