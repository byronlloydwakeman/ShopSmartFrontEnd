import React, { useState } from "react";

// Importing toastify module
import {toast} from 'react-toastify';
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';

import "../../App.css";

// toast.configure();

export const AddListItem = ({shoppingList, setShoppingList, setFilter, waitrose, asda, tesco}) => {
    const [inputValue, setInputValue] = useState("");

    const handleAddItem = () => {
        const selectElement = document.querySelector('.addListItem-select');
        setFilter(selectElement.value);
        setShoppingList([...shoppingList, inputValue]);
        setInputValue(''); // Clear the input after adding the item
    };

    const notify = () => {
        toast.warning("Please select at least one supermarket");
    }

    return(
        <div class="flex-row addListItem-container">
            <button className="addListItem-button" onClick={() => {
                if(waitrose || asda || tesco){
                    handleAddItem()
                }
                else{
                    notify("Please selected a supermarket")
                }
            }}>+</button>
            <input className="addListItem-entry" id="shoppingItemToAdd" type="text" placeholder="Enter item here" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <select className="addListItem-select">
                <option>Best value</option>
                <option>Most expensive</option>
                <option>Least expensive</option>
                <option>Most quantity</option>
                <option>Least quantity</option>
            </select>

        </div>
    )
}