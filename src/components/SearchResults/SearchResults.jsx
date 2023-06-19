import {React, useState} from "react";

// Importing toastify module
import {toast} from 'react-toastify';
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
import "./SearchResults.css";
import { findShoppingItem } from "../../api/findShoppingItem";
import { ListItem } from "../ListItem/ListItem";

export const SearchResults = ({shoppingBasket, setShoppingBasket, keyword, filter, waitrose, asda, tesco}) => {
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
            console.log(res);
            setData(res.data);
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
            <div className="searchResults-container">
                {
                    data.map((d) => {
                        return(
                            <ListItem data={d} shoppingBasket={shoppingBasket} setShoppingBasket={setShoppingBasket}/>
                        )
                    })
                }
            </div>
        )
    }
}