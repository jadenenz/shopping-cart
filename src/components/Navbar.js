import React from "react"
import { Link } from 'react-router-dom'

function Navbar({ productCart, getTotalQuantity }) {
    const navStyle = {
        color: 'white'
    }

    let totalQuantity = getTotalQuantity()

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav--links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/shop">
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to="/cart">
                    <li>Cart - {totalQuantity}</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar