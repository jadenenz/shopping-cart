import React from "react"

function Item(props) {

    const [cardData, setCardData] = React.useState(
        {
        name: props.name,
        price: props.price,
        img: props.img,
        id: props.id,
        quantity: 0
        }
    )


    function handleChange(event) {
        setCardData(prevCardData => {
            return {
                ...prevCardData,
                quantity: parseInt(event.target.value)
            }
        })
    }

    function handleCart() {
        upQuantity();
        props.addToCart(cardData)
    }

    function upQuantity() {
        setCardData(prevCardData => {
            return {
                ...prevCardData,
                quantity: cardData.quantity + 1
            }
        })
    }

    function downQuantity() {
        setCardData(prevCardData => {
            return {
                ...prevCardData,
                quantity: cardData.quantity - 1
            }
        })
    }

    const itemQuantity =  (
        <div className="item--quantity">
            <button onClick={downQuantity}>-</button>
            <input 
            className="item--input" 
            type='text' 
            value={cardData.quantity} 
            onChange={handleChange}
            name='quantity'
            />
            <button onClick={upQuantity}>+</button>
        </div>
    )

    return(
        <div className="item--container">
            <img src={props.img} alt="mtg card" />
            <div className="item--price">{props.price}</div>
            <div className="item--name">{props.name}</div>
            <div className="item--cart">
                { cardData.quantity > 0 && itemQuantity}
                { cardData.quantity === 0 && <button onClick={handleCart}className="item--add">Add</button>}
            </div>
        </div>
    )
}

export default Item