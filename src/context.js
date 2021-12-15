import React, { createContext, useContext, useState, useEffect } from "react";

import affirmations from "./assets/affirmations";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState({});
  const [imageTwo, setImageTwo] = useState({});
  const [quoteInfo, setQuoteInfo] = useState([]);
  const [advice, setAdvice] = useState({});
  const [activity, setActivity] = useState({});
  const [stoicQuote, setStoicQuote] = useState({});
  const [word, setWord] = useState([]);
  const [affirmation, setAffirmation] = useState("");
  const [meal, setMeal] = useState("");
  const [cocktail, setCocktail] = useState("");
  //Gather API Responses

  /* Image API */
  const getImage = async () => {
    const pictureWidth = window.innerWidth;
    const responseOne = await fetch(
      `https://picsum.photos/${pictureWidth}/400`
    );
    const responseTwo = await fetch(
      `https://picsum.photos/${pictureWidth}/900`
    );
    const randImageOne = responseOne.url;
    const randImageTwo = responseTwo.url;
    setImage(randImageOne);
    setImageTwo(randImageTwo);
  };

  /* Quote API */
  const getQuote = async () => {
    const response = await fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes/random`
    );
    const randQuote = await response.json();
    setQuoteInfo(randQuote.data[0]);
  };

  const getAdvice = async () => {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const randAdvice = await response.json();
    setAdvice(randAdvice);
  };

  const getActivity = async () => {
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const randActivity = await response.json();
    setActivity(randActivity);
  };
  const getStoicQuote = async () => {
    const response = await fetch(
      "https://stoicquotesapi.com/v1/api/quotes/random"
    );
    const randStoicQuote = await response.json();
    setStoicQuote(randStoicQuote);
  };

  const getWord = async () => {
    const response = await fetch(`https://random-words-api.vercel.app/word`);
    const randWord = await response.json();
    setWord(randWord[0]);
  };

  const getAffirmation = () => {
    const index = getRndInteger(0, 46);
    setAffirmation(affirmations[index]);
  };

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getMeal = async () => {
    const response =
      await fetch(`https://www.themealdb.com/api/json/v1/1/random.php
`);
    const randMeal = await response.json();
    setMeal(randMeal.meals[0]);
  };
  const getCocktail = async () => {
    const response =
      await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php
`);
    const randCocktail = await response.json();
    setCocktail(randCocktail.drinks[0]);
  };

  useEffect(() => {
    setIsLoading(true);
    getImage();
    getAdvice();
    getActivity();
    getStoicQuote();
    getWord();
    getAffirmation();
    getMeal();
    getCocktail();
    getQuote();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        image,
        imageTwo,
        quoteInfo,
        advice,
        activity,
        stoicQuote,
        word,
        affirmation,
        meal,
        cocktail,
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
