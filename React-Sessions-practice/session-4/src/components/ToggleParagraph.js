import React, { useState } from "react";

function ToggleParagraph(){
    const [visible, setVisible] = useState(false);
    function handleButtonClick(){
        setVisible(!visible);
    }
    return(
        <div>
            <button onClick={handleButtonClick}>{visible ? 'Hide ':'Show '}Paragraph</button>
            {visible && <p>Grapefruit are forever.</p>}
        </div>
    )
}
export default ToggleParagraph;