import React from "react"
import CartItem from "./CartItem"

function Cart( {productCart} ) {

    const cartItems = productCart.map(product => {
        return (
            <CartItem 
            name={product.name}
            price={product.price}
            img={product.img}
            quantity={product.quantity}
            key={product.oracle_id}
            />
        )
    })

    function getGrandTotal() {
        let grandTotal = 0
        productCart.forEach(product => {
            const total = (Math.round((product.quantity * product.price) * 100) / 100).toFixed(2)
            grandTotal += Number(total)
        })
        return (Math.round((grandTotal) * 100) / 100).toFixed(2)
    }

    let grandTotal = getGrandTotal()

    return (
        <div className="cart--container">
            <h3>Your Cart</h3>
            <div className="cart--items">
            {productCart.length > 0 && cartItems}
            </div>
            <div className="cart--final-total">Final total: ${grandTotal}</div>
            <button className="cart--checkout">Checkout</button>
        </div>
    )
}

export default Cart