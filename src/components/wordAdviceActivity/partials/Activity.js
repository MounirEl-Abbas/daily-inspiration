import React from "react";

const Activity = ({ data }) => {
  const { activity, type } = data.data;
  return (
    <article className="waa-component">
      <h3>"{type}" activity</h3>
      <p>{activity}</p>
    </article>
  );
};

export default Activity;
