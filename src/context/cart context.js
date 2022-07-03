import {createContext,useState} from 'react'

let CartContext = createContext()

function CartProvider({children}) {
    let [cartData, setCartData]=useState({
        count:0,
        products:[]
    })
  return (
    <CartContext.Provider  value={{cartData,setCartData}}>
        {children}
    </CartContext.Provider>
  )
}

export {CartContext,CartProvider}