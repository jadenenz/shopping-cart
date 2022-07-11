import React from "react"
import Item from "./Item"
// import { cardData } from "./cardData"
import { apitest } from "./apitest"

function Shop() {

    // const items = cardData.map(card => {
    //     return (
    //         <Item 
    //         name={card.name}
    //         price={card.price}
    //         img={card.img}
    //         />
    //     )
    // })

    const [cardList, setCardList] = React.useState([])

    async function fetchData(cardArray) {
        let newCardList = []
        for (const card of apitest) {
            const cardInfo = await fetch(`https://api.scryfall.com/cards/search?q=${card}`)
            const cardjson = await cardInfo.json()
            newCardList = [...newCardList, cardjson.data[0]]
            // console.log(`Name: ${cardjson.data[0].name}, Price: ${cardjson.data[0].prices.usd}`)
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

    React.useEffect(() => {
        fetchData(apitest)
    },[])

    const items = cardList.map((card) => {
        console.log(card)
        return (
            <Item 
            name={card.name} 
            price={card.prices.usd}
            img={getImage(card)}
            />
        )
    })

    return (
        <div className="shop--container">
            <div className="cart--sticky">

            </div>
            <h1>Magic Angels Shop</h1>
            <div className="shop--items">{items}</div>
        </div>
    )
}

export default Shop