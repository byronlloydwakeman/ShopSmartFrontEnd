import React from "react";
import "./Toggle.css";
import "../../App.css";

// const ToggleOn = (toggleLever) => {
//     toggleLever.classList.toggle("toggle-lever-on");
// }

// const ToggleOff = (toggleLever) => {
    
// }

export const Toggle = ({toggle, setToggle, id}) => {
    return(
        <div className="flex-row toggle-container" onClick={() => {
            var toggleLever = document.getElementById(id);
            toggleLever.classList.toggle("toggle-lever-on");
            setToggle(!toggle);
        }}>
            <div id={id} className="toggle-lever"/>
        </div>
    )
}