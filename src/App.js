import Navbar from "./components/Navbar"
import Homepage from "./Homepage"
import Shop from "./Shop"
import { HashRouter, Routes, Route } from "react-router-dom"
import React from "react"
import Cart from "./components/Cart"
import { apitest } from "./apitest"

function App() {

  const [cardList, setCardList] = React.useState([])
  const [productCart, setProductCart] = React.useState([])

  React.useEffect(() => {
      fetchData(apitest)
  },[])

  async function fetchData(cardArray) {
      let newCardList = []
      for (const card of apitest) {
          const cardInfo = await fetch(`https://api.scryfall.com/cards/search?q=${card}`)
          const cardjson = await cardInfo.json()
          newCardList = [...newCardList, cardjson.data[0]]
      }
      setCardList(newCardList)
  }

  function addToCart(item) {
    setProductCart(prevProductCart => {
       return [...prevProductCart, {...item, quantity: 1}]
    })
}

  function deleteFromCart(item) {
    console.log(item)
    setProductCart(prevProductCart => {
      const findResult = prevProductCart.findIndex(product => {
        return item.oracle_id === product.oracle_id
      })

      const newState = [...prevProductCart]
      newState.splice(findResult,1)
      return newState
    })
  }

function getTotalQuantity() {
  let totalQuantity = 0
  productCart.forEach(product => {
    if (product.quantity){
      totalQuantity += product.quantity
    }
  })
  return totalQuantity
}

function setQuantity(id, quantity) {
  setProductCart(prevProductCart => {
      const findResult = prevProductCart.findIndex(product => {
          return id === product.oracle_id
      })

      const newState = [...prevProductCart]

      const newObject = prevProductCart[findResult]


      newState.splice(findResult,1,{...newObject, quantity})
      return newState
  })
}

  return (
    <HashRouter>
      <div className="app--container">
        <Navbar productCart={productCart} getTotalQuantity={getTotalQuantity} />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop cardList={cardList}addToCart={addToCart} setQuantity={setQuantity} productCart={productCart} deleteFromCart={deleteFromCart} />} />
            <Route path="/cart" element={<Cart productCart={productCart} />} />
          </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
