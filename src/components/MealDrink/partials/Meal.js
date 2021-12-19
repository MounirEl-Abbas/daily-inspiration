import React from "react";

const Meal = ({ data }) => {
  const { strMeal, strMealThumb, strArea, strCategory, strSource } = data.data;
  return (
    <article id="meal">
      <h3>Meal of the Day</h3>
      <div>
        <a href={strSource} target="_blank" rel="noreferrer">
          <figure>
            <img src={strMealThumb} alt="" />
          </figure>
          <h4>{strMeal}</h4>
          <p>
            {strArea}, {strCategory}
          </p>
        </a>
      </div>
    </article>
  );
};

export default Meal;
