import React, { useState, useEffect } from "react";

import Meal from "./partials/Meal";
import Drink from "./partials/Drink";

import { useGlobalContext } from "../../context";

const MealDrink = () => {
  const { getRelevantData, isLoading } = useGlobalContext();
  const [mealDrink, setMealDrink] = useState([]);

  useEffect(() => {
    if (isLoading) return;
    const meal = getRelevantData("dailyMeal");
    const drink = getRelevantData("dailyDrink");
    setMealDrink([meal, drink]);
  }, [isLoading]);

  useEffect(() => {
    console.log(mealDrink);
  }, [mealDrink]);

  return (
    <div>
      {mealDrink.length ? (
        <>
          {mealDrink.map((data, index) => {
            if (data.APIName === "dailyMeal")
              return <Meal data={data} key={index} />;

            if (data.APIName === "dailyDrink")
              return <Drink data={data} key={index} />;
          })}
        </>
      ) : (
        <h2 className="loading">Loading Meal & Drink...</h2>
      )}
    </div>
  );
};

export default MealDrink;
