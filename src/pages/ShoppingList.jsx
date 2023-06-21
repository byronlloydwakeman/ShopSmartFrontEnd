import React, { useEffect, useState } from "react";
import { ListItem } from "../components/ListItem/ListItem";
import { AddListItem } from "../components/ListItem/AddListItem";
import { CategoryBar } from "../components/CategoryBar/CategoryBar";

import "../App.css";
import "./ShoppingList.css";
import { SearchResults } from "../components/SearchResults/SearchResults";
import { ShoppingBasket } from "../components/ShoppingBasket/ShoppingBasket";

export const ShoppingList = () => {
    const [filter, setFilter] = useState([])

    const [userInput, setUserInput] = useState("");

    // Toggles
    const [waitrose, setWaitrose] = useState(false);
    const [asda, setAsda] = useState(false);
    const [tesco, setTesco] = useState(false);

    const [shoppingBasket, setShoppingBasket] = useState([]);

    return(
        <>
            <div className="flex-row">

                <div className="flex-column list-container">
                    <h1 className="shoppingList-title">Shopping list</h1>
                    <CategoryBar waitrose={waitrose} setWaitrose={setWaitrose} asda={asda} setAsda={setAsda} tesco={tesco} setTesco={setTesco}/>
                    <AddListItem setFilter={setFilter} setUserInput={setUserInput} waitrose={waitrose} asda={asda} tesco={tesco}/>
                    {
                        userInput != "" ? (
                            <SearchResults shoppingBasket={shoppingBasket} setShoppingBasket={setShoppingBasket} keyword={userInput} filter={filter} waitrose={waitrose} asda={asda} tesco={tesco}/>
                        ) : (
                            <></>
                        )
                    }
                </div>

                <ShoppingBasket shoppingBasket={shoppingBasket} setShoppingBasket={setShoppingBasket}/>
            </div>
        </>
    )
}