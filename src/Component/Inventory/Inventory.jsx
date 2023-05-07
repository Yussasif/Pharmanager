import React from 'react'
import location from "./location.svg"
import prescribed from "./prescribed.svg"
import quantity from "./quantity.svg"
import weight from "./weight.svg"

const Inventory = () => {
    return (
        <div>
            <img src={location} alt="" />
            <img src={prescribed} alt="" />
            <img src={quantity} alt="" />
            <img src={weight} alt="" />
        </div>
    )
}

export default Inventory
