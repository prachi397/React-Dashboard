import React from "react";

function WelcomeComp(props) {
  function handleLogin() {
    console.log("Trying to login");
  }
  return (
    <div>
      {props.isLoggedIn ? <h1>Welcome</h1> : <button onClick={handleLogin}>Login</button>}
    </div>
  );
}
export default WelcomeComp;
