import React from "react";

const Activity = ({ data }) => {
  const { activity, type } = data.data;
  return (
    <article className="waa-component">
      <h3>Activity</h3>
      <div>
        <p>"{type}" activity</p>
        <p>{activity}</p>
      </div>
    </article>
  );
};

export default Activity;
