import React from "react"
import PropTypes from 'prop-types'

function Item({ cardData, quantity, addToCart, setQuantity }) {



    function handleChange(event) {
        setQuantity(cardData.oracle_id,parseInt(event.target.value))
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
            type='text' 
            value={quantity} 
            onChange={handleChange}
            name='quantity'
            />
            <button onClick={upQuantity}>+</button>
        </div>
    )

    return(
        <div className="item--container">
            <img src={cardData.img} alt="mtg card" />
            <div className="item--price">{cardData.price}</div>
            <div className="item--name">{cardData.name}</div>
            <div className="item--cart">
                { quantity > 0 && itemQuantity}
                { quantity === undefined && <button onClick={handleCart}className="item--add">Add</button>}
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