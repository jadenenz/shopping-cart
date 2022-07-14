import React from "react"

function CartItem(props) {
    const total = (Math.round((props.quantity * props.price) * 100) / 100).toFixed(2)


    return (
        <div className="cart-item--container">
            <img src={props.img} alt="product"/>
            <div className="cart-item--name">{props.name}</div>
            <div className="cart-item--unit-price">Unit price: ${props.price}</div>
            <div className="cart-item--total-price">Total price: ${total}</div>
            <div>Quantity: {props.quantity}</div>
        </div>
    )
}

export default CartItem