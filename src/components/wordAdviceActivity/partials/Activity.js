import React from "react";

const Activity = ({ dailyActivity }) => {
  const { activity, type } = dailyActivity.data;
  return (
    <article className="waa-component">
      <h3>"{type}" activity</h3>
      <p>{activity}</p>
    </article>
  );
};

export default Activity;
