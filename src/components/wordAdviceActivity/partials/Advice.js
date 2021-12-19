import React from "react";

const Advice = ({ data }) => {
  const { advice } = data.data;
  return (
    <article className="waa-component">
      <h3>Advice</h3>
      <div>
        <p>{advice}</p>
      </div>
    </article>
  );
};

export default Advice;
