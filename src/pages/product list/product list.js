import React,{useState,useEffect} from 'react'
import img from '../../assets/images/mobile.jpg'
import Product from '../../components/product/product'
import axios from 'axios'
import './product list.css'

function  ProductList() {
  let productsUrl = "https://fakestoreapi.com/products"

  

  let fetchData = async(url)=>{
    try {

      let response = await axios.get(url)
      console.log('data fetched \n ',response.data)
      setLoading(false)
      setData(response.data)
      
    } catch (error) {
      setLoading(false)
      setError(true)
      console.log('error occured dude..',error)
    }
  
  }


  let [loading, setLoading]=useState(true)
  let [error,setError]=useState({errorOccured:false,errorMessage:''})
  let [data,setData]= useState([])

  useEffect(()=>{
    fetchData(productsUrl)
  },[])

  if(loading){
    return <h2>Loading ...</h2>
  }
  else if(error.errorOccured){
    return<h2>Error Occured...{`\n ${error.errorMessage}`}</h2>
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
             count={product.rating?.count}
                  ></Product>
          })
        }
        </div>

        </div>
    )
  }


}

export default ProductList