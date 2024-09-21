import React, { useState } from "react";

function ConditionalComp(){
    const [user,setUser] = useState(false);
    let text = "";
    if(user){
        text = "Log out"
    }else{
        text = "Log in"
    }

    function handleToggle(){
        setUser(!user);
    }

    return(
        <div>
            <button onClick={handleToggle}>{text}</button> 
        </div>
    )
}
export default ConditionalComp;