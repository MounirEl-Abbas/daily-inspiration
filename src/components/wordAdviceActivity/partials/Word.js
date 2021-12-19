import React from "react";

const Word = ({ data }) => {
  const { word, pronunciation, definition } = data.data;
  return (
    <article className="waa-component">
      <div>
        <h3>Word of the Day</h3>
        <p>
          <span>{word}</span> "{pronunciation}"
        </p>
      </div>
      <p>{definition}</p>
    </article>
  );
};

export default Word;
