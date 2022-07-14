import React from "react"
import Item from "./components/Item"
import PropTypes from 'prop-types'


function Shop({ cardList, productCart, addToCart, setQuantity, deleteFromCart}) {
    
    
    
    // const [cardList, setCardList] = React.useState([])
    // const [productCart, setProductCart] = React.useState([])

    // React.useEffect(() => {
    //     fetchData(apitest)
    // },[])

    // async function fetchData(cardArray) {
    //     let newCardList = []
    //     for (const card of apitest) {
    //         const cardInfo = await fetch(`https://api.scryfall.com/cards/search?q=${card}`)
    //         const cardjson = await cardInfo.json()
    //         newCardList = [...newCardList, cardjson.data[0]]
    //     }
    //     setCardList(newCardList)
    // }

    function getImage (card) { //handles cards with multiple faces, but it stopped working idk why
        if (card.card_faces)
        {
        return card.card_faces[0].imIage_uris.large
        } else {
        return card.image_uris.large
        }
    }

    // function addToCart(item) {
    //     setProductCart(prevProductCart => {
    //        return [...prevProductCart, {...item, quantity: 1}]
    //     })
    // }

    // function setQuantity(id, quantity) {
    //     setProductCart(prevProductCart => {
    //         const findResult = prevProductCart.findIndex(product => {
    //             return id === product.oracle_id
    //         })

    //         const newState = [...prevProductCart]

    //         const newObject = prevProductCart[findResult]


    //         newState.splice(findResult,1,{...newObject, quantity})
    //         return newState
    //     })
    // }

    const items = cardList.map((card) => {
        const cardData = {
            name: card.name,
            img: getImage(card),
            price: card.prices.usd,
            oracle_id: card.oracle_id
        }
        const findResult = productCart.find(product => {
            return card.oracle_id === product.oracle_id
        })
        return (
            <Item 
            cardData={cardData}
            addToCart={addToCart}
            quantity={findResult?.quantity}
            setQuantity={setQuantity}
            deleteFromCart={deleteFromCart}
            key={card.oracle_id}
            />
        )
    })

    return (
        <div className="shop--container">
            <h1>Magic Angels Shop</h1>
            <div className="shop--items">{items}</div>
        </div>
    )
}

Shop.propTypes = {
    addToCart: PropTypes.func,
    setQuantity: PropTypes.func,
    productCart: PropTypes.array,
    cardList: PropTypes.array
}

export default Shop

//TODO:
