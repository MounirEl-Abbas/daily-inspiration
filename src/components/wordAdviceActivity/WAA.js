import React, { useState, useEffect } from "react";

import Word from "./partials/Word";
import Advice from "./partials/Advice";
import Activity from "./partials/Activity";

import { useGlobalContext } from "../../context";

const WAA = () => {
  const { getRelevantData, isLoading } = useGlobalContext();
  const [wordAdviceActivity, setWordAdviceActivity] = useState([]);
  useEffect(() => {
    if (isLoading) return;
    const word = getRelevantData("dailyWord");
    const advice = getRelevantData("dailyAdvice");
    const activity = getRelevantData("dailyActivity");
    setWordAdviceActivity([word, advice, activity]);
  }, [isLoading]);

  return (
    <section className="waa-container">
      {!isLoading && wordAdviceActivity.length ? (
        <>
          {wordAdviceActivity.map((data, index) => {
            if (data.APIName === "dailyWord")
              return <Word dailyWord={data} key={index} />;
            if (data.APIName === "dailyAdvice")
              return <Advice dailyAdvice={data} key={index} />;
            if (data.APIName === "dailyActivity")
              return <Activity dailyActivity={data} key={index} />;
          })}
        </>
      ) : (
        <h2 className="loading">Loading Word, Advice & Activity...</h2>
      )}
    </section>
  );
};

export default WAA;
