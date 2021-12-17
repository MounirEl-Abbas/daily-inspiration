import React from "react";
//Components
import Header from "./components/Header";
import Image from "./components/images/Image";
import Affirmation from "./components/Affirmation";
import Quotes from "./components/Quotes";
import WAA from "./components/wordAdviceActivity/WAA";
import MealDrink from "./components/MealDrink/MealDrink";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Image />
      <Affirmation />
      <Quotes />
      <Image />
      <WAA />
      <MealDrink />
    </div>
  );
};

export default App;
