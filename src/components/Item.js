import React from "react"
import PropTypes from 'prop-types'

function Item({ cardData, quantity, addToCart, setQuantity, deleteFromCart }) {

    
    function handleChange(event) {
        console.log('change event value',event.target.value)
        setQuantity(cardData.oracle_id,Number(event.target.value))
        if (event.target.value === ''){
            console.log('delete card data',cardData)
            deleteFromCart(cardData)
        }
    }

    function handleCart() {
        addToCart(cardData)
    }

    function upQuantity() {
        setQuantity(cardData.oracle_id,quantity + 1)
    }

    function downQuantity() {
        setQuantity(cardData.oracle_id,quantity - 1)
    }


    const itemQuantity =  (
        <div className="item--quantity">
            <button onClick={downQuantity}>-</button>
            <input 
            className="item--input" 
            type='number'
            pattern="[0-9]*"
            inputMode="numeric"
            max="99"
            value={quantity}
            onChange={handleChange}
            name='quantity'
            />
            <button onClick={upQuantity}>+</button>
            <button onClick={() => deleteFromCart(cardData)}>Delete</button>
        </div>
    )

    return(
        <div className="item--container">
            <img src={cardData.img} alt="mtg card" />
            <div className="item--price">{cardData.price}</div>
            <div className="item--name">{cardData.name}</div>
            <div className="item--cart">
                { quantity > 0 && itemQuantity}
                { (quantity === undefined || quantity === 0) && <button onClick={handleCart}className="item--add">Add to Cart</button>}
            </div>
        </div>
    )
}

Item.propTypes = {
    cardData: PropTypes.shape({
        name: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.string,
        oracle_id: PropTypes.string
    }).isRequired,
    quantity: PropTypes.number,
    addToCart: PropTypes.func.isRequired,
    setQuantity: PropTypes.func.isRequired,
}
export default Item