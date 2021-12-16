import React, { createContext, useContext, useState, useEffect } from "react";

import affirmations from "./assets/affirmations";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [affirmation, setAffirmation] = useState("");

  const getAffirmation = () => {
    const index = getRndInteger(0, 46);
    setAffirmation(affirmations[index]);
  };

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const pictureWidth = window.innerWidth;
    Promise.all([
      fetch(`https://picsum.photos/${pictureWidth}/400`),
      fetch(`https://picsum.photos/${pictureWidth}/900`),
      fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random`),
      fetch("https://stoicquotesapi.com/v1/api/quotes/random"),
      fetch(`https://api.adviceslip.com/advice`),
      fetch(`https://www.boredapi.com/api/activity`),
      fetch(`https://random-words-api.vercel.app/word`),
      fetch(`www.themealdb.com/api/json/v1/1/random.php`),
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => {
        console.log(`data`, data);
      })
      .catch((err) => {
        console.log(`err`, err);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        affirmation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;

/* 
https://www.emailjs.com/


https://www.thecocktaildb.com/api.php






https://github.com/tlcheah2/stoic-quote-lambda-public-api




https://github.com/annthurium/affirmations/blob/master/affirmations.js
https://www.themealdb.com/api.php
https://github.com/mcnaveen/Random-Words-API
https://www.boredapi.com/documentation#endpoints-random
https://api.adviceslip.com/
https://pprathameshmore.github.io/QuoteGarden/
https://picsum.photos/
*/
