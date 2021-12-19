import React from "react";

const Drink = ({ data }) => {
  const { strDrink, strCategory, strAlcoholic, strDrinkThumb } = data.data;
  return (
    <article>
      <figure>
        <img src={strDrinkThumb} alt="" />
      </figure>
      <h3>{strDrink}</h3>
      <p>
        <span>Category: {strCategory}</span>, <span>{strAlcoholic}</span>
      </p>
    </article>
  );
};

export default Drink;
