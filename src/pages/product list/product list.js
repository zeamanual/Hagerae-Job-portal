import img from '../../assets/images/mobile.jpg'
import Product from '../../components/product/product'
import './product list.css'

function  ProductList() {
  let product = {
    img,
    price:23.45,
    rating:2.4,
    title:'Iphone 13 Pro Max Iphone 13 Pro Max',
    count:245

  }
  let product2 = {
    img,
    price:23.45,
    rating:5,
    title:'Iphone 13 Pro Max',
    count:245

  }
  let product3 = {
    img,
    price:23.45,
    rating:4,
    title:'Samsung Galaxy s21s Ultra',
    count:245

  }
  return (
    <div className='products'>
    <h2 className='title'>Product List</h2>
    <div className='product-list'>
    <Product key={1} {...product}></Product>
    <Product key={2} {...product2}></Product>
    <Product key={3} {...product3}></Product>
    </div>

    </div>
  )
}

export default ProductList