import React from "react";
import "../../App.css";
import { ListItem } from "../ListItem/ListItem";

export const ShoppingBasket = ({shoppingBasket}) => {

    return (
        <div className="flex-column">
            <h1>Shopping Basket</h1>
            {
                shoppingBasket.map((el) => {
                    ListItem
                })
            }
        </div>
    )
}