import React, { useEffect, useState } from "react";
import { ListItem } from "../components/ListItem/ListItem";
import { AddListItem } from "../components/ListItem/AddListItem";
import { CategoryBar } from "../components/CategoryBar/CategoryBar";

import "../App.css";
import "./ShoppingList.css";

export const ShoppingList = () => {
    const [shoppingList, setShoppingList] = useState([])
    const [filter, setFilter] = useState([])
     
    // Toggles
    const [waitrose, setWaitrose] = useState(false);
    const [asda, setAsda] = useState(false);
    const [tesco, setTesco] = useState(false);

    return(
        <>

            <div className="flex-row">
                <CategoryBar waitrose={waitrose} setWaitrose={setWaitrose} asda={asda} setAsda={setAsda} tesco={tesco} setTesco={setTesco}/>
                <div className="flex-column list-container">
                    <h1 className="shoppingList-title">Shopping list</h1>
                    <AddListItem shoppingList={shoppingList} setShoppingList={setShoppingList} setFilter={setFilter} waitrose={waitrose} asda={asda} tesco={tesco}/>
                    {
                        shoppingList.map((keyword, id) => {
                            return <ListItem keyword={keyword} id={id} filter={filter} setShoppingList={setShoppingList} waitrose={waitrose} asda={asda} tesco={tesco}/>
                        })
                    }
                </div>
            </div>
        </>

    )
}