import React from "react";
//Components
import Header from "./components/Header";
import Image from "./components/Image";
import Affirmation from "./components/Affirmation";
import Quotes from "./components/Quotes";
import WAA from "./components/wordAdviceActivity/WAA";
import MealDrink from "./components/MealDrink/MealDrink";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Image imageNumber={0} />
      <Affirmation />
      <Quotes />
      <Image imageNumber={1} />
      <WAA />
      <MealDrink />
      <footer>ME Time</footer>
    </div>
  );
};

export default App;
