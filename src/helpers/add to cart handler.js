import React from 'react'

function addToCartHandler(cartContextData,data) {

    let {pId,img,title,price}=data
    let newCount = cartContextData.cartData.count+1
    cartContextData.cartData.products.push({
        id:pId,
        img,
        title,
        price
    })
    let newProductsList = cartContextData.cartData.products
    cartContextData.setCartData(
        {
            count:newCount,
            products:newProductsList
        }
    )
}

export default addToCartHandler