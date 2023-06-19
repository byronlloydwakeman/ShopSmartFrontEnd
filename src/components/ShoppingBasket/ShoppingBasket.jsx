import React, { useState } from "react";
import "../../App.css";
import { ShoppingBasketItem } from "./ShoppingBasketItem.jsx";

import "./ShoppingBasket.css";

export const ShoppingBasket = ({shoppingBasket}) => {
    const [open, setOpen] = useState(false);

    return (
        <div id="basketContainer" className="flex-row basketTransition" style={{marginLeft: "auto"}}>
            <div className="shoppingBasketIcon-container">
                <img className="shoppingBasketItem-icon" src={require("../../images/basket.png")} onClick={() => {
                    const basketContainer = document.getElementById("basketContainer");
                    const basket = document.getElementById("basket");
                    if(open){
                        basketContainer.style.transform = "translateX(" + basket.offsetWidth +"px)"
                        setOpen(false);
                    }
                    else{
                        basketContainer.style.transform = "translateX(0)"
                        setOpen(true);
                    }
                }}/>
            </div>
            <div id="basket" className="flex-column shoppingBasket-container">
                <h1 className="shoppingBasket-title">Shopping Basket</h1>
                {
                    shoppingBasket.length != 0 ? (
                        shoppingBasket?.map((el) => {
                            return(
                                <ShoppingBasketItem price={el.price} name={el.name} value={el.value} image={el.image}/>
                            )
                        }) 
                    ) : (
                        <h1 className="shoppingBasket-title">Your basket is empty</h1>
                    )
                }
            </div>
        </div>
    )



}