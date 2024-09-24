import React, { useState } from "react";

const SuperheroCheckBox = (props) =>{
    const [isChecked, setIsChecked] = useState(false);
    function handleCheckBoxChange(e){
        setIsChecked(e.target.checked);
    }
    return(
        <div>
            <input type="checkbox" checked={isChecked} onChange={handleCheckBoxChange}/>
            <label>{props.name}</label>
        </div>
    )
}
export default SuperheroCheckBox;