import React from "react"
import CartItem from "./CartItem"

function Cart(props) {

    const cartItems = props.productCart.map(product => {
        console.log(props.productCart)
        return (
            <CartItem 
            name={product.name}
            price={product.price}
            img={product.img}
            quantity={product.quantity}
            key={product.id}
            />
        )
    })

    return (
        <div className="cart--sticky">
            <h3>Hello Cart</h3>
            {props.productCart.length > 0 && cartItems}
        </div>
    )
}

export default Cart