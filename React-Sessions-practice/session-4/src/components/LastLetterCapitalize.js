import React from "react";

function LastLetterCapitalize(props) {
  function transformText(input) {
    return input
      .split(" ")
      .map((word) => {
        const lowerCaseWord = word.toLowerCase();
        const lastLetterIndex = word.length - 1;
        return (
          lowerCaseWord.slice(0, lastLetterIndex) +
          lowerCaseWord.charAt(lastLetterIndex).toUpperCase()
        );
      })
      .join(" ");
  }

  return(
    <p>{transformText(props.text)}</p>
  );
}
export default LastLetterCapitalize;
