import React, { useEffect, useState } from "react";

import "./ListItem.css"
import "../../App.css";
import { findShoppingItem } from "../../api/findShoppingItem";

// Importing toastify module
import {toast} from 'react-toastify';
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';

import { Tooltip } from 'react-tooltip';

export const ListItem = ({keyword, id, filter, setShoppingList, waitrose, asda, tesco}) => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const supermarkets = [];
    if (waitrose) supermarkets.push('waitrose');
    if (asda) supermarkets.push('asda');
    if (tesco) supermarkets.push('tesco');

    if(isFetching){
        findShoppingItem(keyword, supermarkets, filter)
        .then(res => {
            console.log(typeof(res))
            setData(res.data[0]);
        })
        .catch(err => {
            console.log(err);
            setError(err)
        })
        .finally(() => {
            setIsFetching(false)
        })
    }

    if(isFetching){
        return (
            <div style={{display: "flex", alignItems: 'center', justifyContent: "center"}}>
                <img className="listItem-loading" src={require('../../images/loadingIcon.gif')}></img>
            </div>
        )
    }
    else if(error){
        toast.error("Error searching for " + keyword);
    }
    else{
        return(
            <div id={id} className="flex-column">
                <div className="flex-column listItem-container">
                    <img style={{maxWidth: "135px"}} src={data.image}></img>
                    <div className="flex-row">
                        
                    </div>



                    <img src={require("../../images/basket.png")} alt="basket" className="listItem-basket" onClick={() => {
                        var container = document.getElementById(id);
                        console.log(container);
                        container.classList.toggle("listItem-faded");
                    }}/>
                    <h1 className="listItem-text">{data.name}</h1>
                    <h1 className="listItem-text">{data.price}</h1>
                    <h1 className="listItem-text">{data.value}</h1>
                    <img id={`${id}-arrow`} className="listItem-arrow" src={require("../../images/downArrow.png")} onClick={() => {
                        setDropDownOpen(!dropDownOpen)
                        var arrow = document.getElementById(`${id}-arrow`);
                        arrow.classList.toggle("listItem-arrow-reverse")
                        console.log("open/close")
                    }}/>
                    <img className="listItem-bin"  src={require("../../images/bin.png")} onClick={() => {
                        setShoppingList(prevList => prevList.filter((_, i) => i !== id))
                    }}/>
                </div>
                <>
                    {
                        dropDownOpen ? (
                            <div className="flex-column listItemDropdown-container">
                                <div className="flex-row">
                                    <div className="flex-column">
                                        <h2 className="listItem-text listItemDropdown-text">{data.name}</h2>
                                        <h2 className="listItem-text listItemDropdown-text">{data.price}</h2>
                                        <h2 className="listItem-text listItemDropdown-text">{data.value}</h2>
                                    </div>
                                    <img style={{maxWidth: "135px"}} src={data.image}></img>
                                </div>
                                <a className="listItemDropdown-text listItem-lookingFor" data-tooltip-id="my-tooltip" data-tooltip-content={`Please use more specfic keywords to refine your search`}>
                                    Not what you're looking for?
                                </a>
                                <Tooltip id="my-tooltip" multiline={true}/>
                            </div>

                        ) : (<></>)
                    }
                </>
            </div>
        )
    }
}