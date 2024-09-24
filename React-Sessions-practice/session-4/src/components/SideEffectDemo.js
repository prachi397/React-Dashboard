import React, { useState } from "react";
import UseEffectNoCleanup from "./UseEffectNoCleanup ";

const SideEffectDemo = () => {
    const [msg, setMsg] = useState('');
    const [userId, setUserId] = useState('')
    const [checked, setChecked] = useState(false);

    function handleMsgChange(e) {
        setMsg(e.target.value);
    }
    function handleUserIdChange(e) {
        setUserId(e.target.value);
    }
    return (
        <div>
            <input
                type="text"
                placeholder="Add a message"
                value={msg}
                onChange={(e) => handleMsgChange(e)}
            />
            <input
                type="number"
                value={userId}
                onChange={(e) => handleUserIdChange(e)}
                min={1}
            />
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
            {checked && <UseEffectNoCleanup userId={userId} msg={msg}/>}
        </div>
    )
}
export default SideEffectDemo;