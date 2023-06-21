import React, { useEffect, useState } from "react";

import "./ListItem.css"
import "../../App.css";

// const handleElementUpdate = (index, newValue) => {
//     setShoppingBasket(prev => 
//         prev.map(item, i) => {
//             if (i == index){
//                 return {
//                     ...item, quantity: quantity + 1
//                 }
//             }
//             return 0;
//         });
// }

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
                    const index = shoppingBasket.findIndex(item => item.name === data.name);
                    if(index === -1){
                        setShoppingBasket([...shoppingBasket, data])
                    }
                }}>Add to shopping list</button>
            </div>
        </div>
    )
}