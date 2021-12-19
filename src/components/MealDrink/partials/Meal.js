import React from "react";

const Meal = ({ data }) => {
  const { strMeal, strMealThumb, strArea, strCategory, strSource } = data.data;
  return (
    <article>
      <a href={strSource} target="_blank" rel="noreferrer">
        <figure>
          <img src={strMealThumb} alt="" />
        </figure>
        <h3>{strMeal}</h3>
        <p>
          <span>Area: {strArea}</span> <span>Category: {strCategory}</span>
        </p>
      </a>
    </article>
  );
};

export default Meal;
