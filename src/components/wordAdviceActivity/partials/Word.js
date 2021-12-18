import React from "react";

const Word = ({ dailyWord }) => {
  const { word, pronunciation, definition } = dailyWord.data;
  console.log(`dailyWord`, dailyWord);
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
