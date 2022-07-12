import React from "react"
import Item from "./components/Item"
import Cart from "./components/Cart"
import { apitest } from "./apitest"

function Shop() {


    const [cardList, setCardList] = React.useState([])
    const [productCart, setProductCart] = React.useState([])


    async function fetchData(cardArray) {
        let newCardList = []
        for (const card of apitest) {
            const cardInfo = await fetch(`https://api.scryfall.com/cards/search?q=${card}`)
            const cardjson = await cardInfo.json()
            newCardList = [...newCardList, cardjson.data[0]]
        }
        setCardList(newCardList)
    }

    function getImage (card) {
        if (card.card_faces)
        {
        return card.card_faces[0].image_uris.large
        } else {
        return card.image_uris.large
        }
    }

    function addToCart(item) {
        setProductCart(prevProductCart => {
           return [...prevProductCart, item]
        })
        console.log(productCart)
    }

    React.useEffect(() => {
        fetchData(apitest)
    },[])

    const items = cardList.map((card) => {
        return (
            <Item 
            name={card.name} 
            price={card.prices.usd}
            img={getImage(card)}
            addToCart={addToCart}
            id={card.oracle_id}
            key={card.oracle_id}
            />
        )
    })

    return (
        <div className="shop--container">
            <Cart productCart={productCart} />
            <h1>Magic Angels Shop</h1>
            <div className="shop--items">{items}</div>
        </div>
    )
}

export default Shop

//TODO:
//style the cart a bit more
//add cart via state