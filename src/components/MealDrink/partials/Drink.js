import React from "react";

const Drink = ({ data }) => {
  const { strDrink, strCategory, strAlcoholic, strDrinkThumb } = data.data;
  return (
    <article>
      <h3>Drink of the Day</h3>
      <div>
        <figure>
          <img src={strDrinkThumb} alt="" />
        </figure>
        <h4>{strDrink}</h4>
        <p>
          {strCategory}, {strAlcoholic}
        </p>
      </div>
    </article>
  );
};

export default Drink;
