import React from "react";

const Advice = ({ data }) => {
  const { advice } = data.data;
  return (
    <article className="waa-component">
      <h3>Advice</h3>
      <p>{advice}</p>
    </article>
  );
};

export default Advice;
