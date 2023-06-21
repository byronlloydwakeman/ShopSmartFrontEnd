import React, { useState } from "react";
import "../../App.css";
import { ShoppingBasketItem } from "./ShoppingBasketItem.jsx";

import "./ShoppingBasket.css";

export const ShoppingBasket = ({shoppingBasket, setShoppingBasket}) => {
    const [open, setOpen] = useState(false);
    var sum = 0;
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
                        shoppingBasket?.map((el, index) => {
                            console.log(el);
                            //If quantity hasnt been initialised yet.
                            if(!el.quantity){
                                el.quantity = 1;
                            }

                            sum += Number(el?.price?.substring(1)) * el.quantity;

                            return(
                                <>
                                    <ShoppingBasketItem id={index} shoppingBasket={shoppingBasket} setShoppingBasket={setShoppingBasket} price={el.price} name={el.name} value={el.value} image={el.image} quantity={el.quantity}/>
                                </>

                            )
                        })
                         
                    ) : (
                        <>
                            <h1 className="shoppingBasket-subtitle">Your basket is empty</h1>
                        </>
                    )
                }
                <h1 className="shoppingBasket-subtitle shoppingBasket-cost">Cart total: £{(Math.round(sum * 100) / 100).toFixed(2)}</h1>
            </div>
        </div>
    )



}