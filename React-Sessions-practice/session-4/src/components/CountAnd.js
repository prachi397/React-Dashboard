import React, { useState } from "react";

function CountAnd() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  function handleChnage(e) {
    const inputText = e.target.value;
    setText(inputText);
    const andCount = (inputText.match(/\band\b/g) || []).length;
    setCount(andCount);
  }
  return (
    <div>
      <textarea
        value={text}
        onChange={handleChnage}
        placeholder="Type here..."
      />
      <p>Occurance of 'and' is: {count}</p>
    </div>
  );
}
export default CountAnd;
