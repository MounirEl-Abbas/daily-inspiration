import React from "react";

const Word = ({ data }) => {
  const { word, pronunciation, definition } = data.data;
  return (
    <article className="waa-component">
      <h3>Word of the Day</h3>
      <div>
        <p>
          <span>{word}</span> "{pronunciation}"
        </p>
        <p>{definition}</p>
      </div>
    </article>
  );
};

export default Word;
