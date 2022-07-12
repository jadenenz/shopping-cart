import React from "react"

function CartItem(props) {
    return (
        <div className="cart-item--container">
            <img src={props.img} alt="product"/>
            <div className="cart-item--name">{props.name}</div>
            <div className="cart-item--unit-price">Unit price: ${props.price}</div>
            <div className="cart-item--total-price">Total price: ${props.quantity * props.price}</div>
        </div>
    )
}

export default CartItem