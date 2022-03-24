import React,{useContext,createContext,useState} from 'react'

let CartContext = createContext()

function CartProvider({children}) {
    let [cartData, setCartData]=useState({
        count:0,
        items:[]
    })
  return (
    <CartContext.Provider  value={{cartData,setCartData}}>
        {children}
    </CartContext.Provider>
  )
}

export default {CartContext,CartProvider}