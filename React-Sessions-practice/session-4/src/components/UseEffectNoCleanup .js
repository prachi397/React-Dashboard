import axios from "axios";
import React, { useEffect } from "react";

const UseEffectNoCleanup = (props) =>{

    const updateEmail=async()=>{
        try{
            const url = ` https://reqres.in/api/users/${props.userId}`;
            let resp = await axios.get(url);
            let email = resp.data.data.email;
            console.log(email);
        }catch(err){
            console.log("Error in fetching data");
        }
    }
    useEffect(() => {
        // updateEmail();
        const timerId = setInterval(() => updateEmail(), 2000);
        return () => {
          clearInterval(timerId);
        };
      },[props.userId]);
    return(
        <div>
            {props.msg}
        </div>
    )
}
export default UseEffectNoCleanup;