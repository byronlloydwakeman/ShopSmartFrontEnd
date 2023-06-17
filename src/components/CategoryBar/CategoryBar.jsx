import React from 'react';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Tooltip } from 'react-tooltip';
import { Toggle } from '../Toggle/Toggle';
import { autoSearchByLocation } from '../../api/autoSearchByLocation';

import "../../App.css";
import "./CategoryBar.css";

export const CategoryBar = ({waitrose, setWaitrose, asda, setAsda, tesco, setTesco}) => {
  const [locations, setLocations] = useState([])
  const [input, setInput] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="flex-column categoryBar-container">
      <div className="flex-row" style={{alignItems: "center"}}>
        <h1 className="categoryBar-text">Supermarket Preference</h1>
        <a data-tooltip-id="my-tooltip" data-tooltip-content={`Use the toggles to select/unselect certain supermarkets getting searched.`}>
          ❔
        </a>
        <Tooltip id="my-tooltip" multiline={true}/>
      </div>
        <div className="flex-column">
          <div className="flex-row">
            <h1 className='categoryBar-text'>
              Waitrose
            </h1>
            <div className='toggleBar-container'>
              <Toggle toggle={waitrose} setToggle={setWaitrose} id={1}/>
            </div>
          </div>
          <div>
            <div className="flex-row">
              <h1 className='categoryBar-text'>
                Asda
              </h1>
              <div className='toggleBar-container'>
                <Toggle toggle={asda} setToggle={setAsda} id={2}/>
              </div>
            </div>
          </div>
          <div>
            <div className="flex-row">
              <h1 className='categoryBar-text'>
                Tesco
              </h1>
              <div className='toggleBar-container'>
                <Toggle toggle={tesco} setToggle={setTesco} id={3}/>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='flex-column'>
          <h1>Auto search by location</h1>
          <div className="flex-row">
            <input onChange={(e) => {setInput(e.target.value)}}/>
            <button onClick={() => {
              autoSearchByLocation(locations)
              .then(res => {
                  console.log(res)
                  setLocations(res)
              })
              .catch(err => {
                  console.log(err);
                  setError(err)
              })
              .finally(() => {
                  setIsFetching(false)
              })
            }}>Search</button>
          </div>
        </div> */}
    </div>

  );
};