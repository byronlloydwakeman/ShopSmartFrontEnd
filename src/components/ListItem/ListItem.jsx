import React, { useEffect, useState } from "react";

import "./ListItem.css"
import "../../App.css";


export const ListItem = ({data, shoppingBasket, setShoppingBasket}) => {
    return(
        <div className="flex-column listItem-container">
            <img className="listItem-image" src={data.image}></img>
            <div className="flex-row">
                <h1 className="listItem-text">{data.name}</h1>
            </div>
            <div className="flex-row">
                <h1 className="listItem-text">{data.price}</h1>
                <h1 className="listItem-text">{data.value}</h1>
            </div>
            <div className="flex-row">
                <button className="addToList-button" onClick={() => {
                    setShoppingBasket([...shoppingBasket, data])
                }}>Add to shopping list</button>
            </div>
        </div>
    )
}