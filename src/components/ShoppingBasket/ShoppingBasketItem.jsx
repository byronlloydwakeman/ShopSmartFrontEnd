import React from "react";

import "../../App.css";
import "./ShoppingBasket.css";



export const ShoppingBasketItem = ({id, setShoppingBasket, name, price, image, value, quantity}) => {

    console.log("reached itme");
    console.log(quantity)

    const handleIncrement = (name) => {
        setShoppingBasket((prevList) =>
          prevList.map((item) =>
            item.name === name ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };
      
      const handleDecrement = (name) => {
        console.log(id);
        if(quantity == 1){
            setShoppingBasket((shoppingBasket) => shoppingBasket.filter((_, index) => index !== id));
        }
        else{
            setShoppingBasket((prevList) =>
                prevList.map((item) =>
                item.name === name ? { ...item, quantity: item.quantity - 1 } : item
                )
            );
        }

      };

    return(
        <div className="flex-row shoppingBasketItem-container">
            <img className="shoppingBasketItem-image" src={image} alt="image not found" />
            <div className="flex-column shoppingBasketItem-text">
                <h1 className="shoppingBasketItem-text">{name}</h1>
                <div className="flex-row">
                    <h1 className="shoppingBasketItem-text">Quantity</h1>
                    <h1 onClick={() => {
                        handleDecrement(name)
                    }} className="shoppingBasketItem-quantity">-</h1>
                    {quantity ? quantity : 1}
                    <h1 onClick={() => {
                        handleIncrement(name)
                    }} className="shoppingBasketItem-quantity">+</h1>
                </div>
                <div className="flex-row">
                    <h1 className="shoppingBasketItem-text" style={{marginRight: "10px"}}>{price}</h1>
                    <h1 className="shoppingBasketItem-text">{value}</h1>
                    <img className="shoppingBasketItem-bin" src={require("../../images/bin.png")} onClick={() => {
                        setShoppingBasket((shoppingBasket) => shoppingBasket.filter((_, index) => index !== id));
                    }}/>
                </div>
            </div>
 
        </div>

    )
}
