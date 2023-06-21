import React, { useState } from "react";
import {toast} from 'react-toastify';
 
import 'react-toastify/dist/ReactToastify.css';
import "../../App.css";

export const AddListItem = ({setFilter, setUserInput, waitrose, asda, tesco}) => {
    const [inputValue, setInputValue] = useState("");

    const refresh = () => {
        setUserInput("");
    }

    const handleAddItem = () => {
        const selectElement = document.querySelector('.addListItem-select');
        setFilter(selectElement.value);
        setUserInput(inputValue);
        setInputValue(''); // Clear the input after adding the item
    }

    const notify = () => {
        toast.warning("Please select at least one supermarket");
    }

    return(
        <div class="flex-row addListItem-container">
            <button className="addListItem-button" onClick={() => {
                if(waitrose || asda || tesco){
                    refresh();
                    setTimeout(() => {
                        handleAddItem();
                    }, 50);

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