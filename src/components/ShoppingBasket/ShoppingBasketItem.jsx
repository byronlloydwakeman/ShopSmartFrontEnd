import React from "react";

import "../../App.css";
import "./ShoppingBasket.css";

export const ShoppingBasketItem = ({name, price, image, value}) => {
    return(
        <div className="flex-row shoppingBasket-container">
            <img className="shoppingBasketItem-image" src={image} alt="image not found" />
            <div className="flex-column">
                <h1 className="shoppingBasketItem-text">{name}</h1>
                <div className="flex-row">
                    <h1 className="shoppingBasketItem-text" style={{marginRight: "10px"}}>{price}</h1>
                    <h1 className="shoppingBasketItem-text">{value}</h1>
                </div>
            </div>
 
        </div>

    )
}