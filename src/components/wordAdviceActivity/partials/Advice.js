import React from "react";

const Advice = ({ dailyAdvice }) => {
  const { advice } = dailyAdvice.data;
  return (
    <article className="waa-component">
      <h3>Advice</h3>
      <p>{advice}</p>
    </article>
  );
};

export default Advice;
