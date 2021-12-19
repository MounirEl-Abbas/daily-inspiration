import React, { createContext, useContext, useState, useEffect } from "react";

import affirmations from "./assets/affirmations";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);

    const pictureWidth = window.innerWidth;
    let arrayOfData = [];
    try {
      const picture1 = await fetch(`https://picsum.photos/${pictureWidth}/400`);
      const picture2 = await fetch(`https://picsum.photos/${pictureWidth}/900`);
      const response = await Promise.all([
        fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/random`),
        fetch("https://stoicquotesapi.com/v1/api/quotes/random"),
        fetch(`https://api.adviceslip.com/advice`),
        fetch(`https://www.boredapi.com/api/activity`),
        fetch(`https://random-words-api.vercel.app/word`),
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`),
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`),
      ]);

      response.forEach(async (res) => {
        const responseData = await res.json();
        arrayOfData.push(responseData);

        if (arrayOfData.length !== response.length) return;
        arrayOfData.push(picture1, picture2);
        parseData(arrayOfData);
      });
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const getAffirmation = () => {
    const index = getRndInteger(0, 46);
    return affirmations[index];
  };

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const parseData = (dataArray) => {
    console.log(`dataArray`, dataArray);
    const DATA_Quote = dataArray[0].data[0];
    const DATA_StoicQuote = dataArray[1];
    const DATA_Advice = dataArray[2].slip;
    const DATA_RandWord = dataArray[3][0];
    const DATA_RandMeal = dataArray[4].meals[0];
    const DATA_RandDrink = dataArray[5].drinks[0];
    const DATA_Activity = dataArray[6];
    const DATA_Affirmation = getAffirmation();
    const DATA_Picture1 = dataArray[7].url;
    const DATA_Picture2 = dataArray[8].url;

    const newDataArray = [
      { APIName: "dailyQuote", data: DATA_Quote },
      { APIName: "dailyStoicQuote", data: DATA_StoicQuote },
      { APIName: "dailyAdvice", data: DATA_Advice },
      { APIName: "dailyWord", data: DATA_RandWord },
      { APIName: "dailyMeal", data: DATA_RandMeal },
      { APIName: "dailyDrink", data: DATA_RandDrink },
      { APIName: "dailyActivity", data: DATA_Activity },
      { APIName: "dailyAffirmation", data: DATA_Affirmation },
      { APIName: "dailyPicture1", data: DATA_Picture1 },
      { APIName: "dailyPicture2", data: DATA_Picture2 },
    ];
    setData(newDataArray);
    setIsLoading(false);

    console.log(`context data`, newDataArray);
  };

  const getRelevantData = (APIName) => {
    // switch (APIName) {
    //   case "dailyAffirmation":
    const result = data.find((APIData) => {
      return APIData.APIName === APIName;
    });
    return result;
    // case "dailyQuote":

    // case "dailyStoicQuote":
    //   break;
    // case "dailyAdvice":
    //   break;
    // case "dailyWord":
    //   break;
    // case "dailyActivity":
    //   break;
    // case "dailyMeal":
    //   break;
    // case "dailyDrink":
    //   break;
    // case "dailyPicture1":
    //   break;
    // case "dailyPicture2":
    //   break;

    // default:
    //   break;
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        getRelevantData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;

/* 
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
