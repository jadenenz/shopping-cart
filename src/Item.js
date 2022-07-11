import React from "react"

function Item(props) {
    return(
        <div className="item--container">
            <img src={props.img} alt="mtg card" />
            <div className="item--price">{props.price}</div>
            <div className="item--name">{props.name}</div>
            <div className="item--cart">
            <button>-</button>
            <input className="item--input" type='text' />
            <button>+</button>
            <button className="item--add">Add</button>
            </div>
        </div>
    )
}

export default Item