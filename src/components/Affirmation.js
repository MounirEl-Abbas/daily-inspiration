import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Affirmation = () => {
  const { getRelevantData, isLoading } = useGlobalContext();
  const [affirmation, setAffirmation] = useState({});

  useEffect(() => {
    if (isLoading) return;
    const result = getRelevantData("dailyAffirmation");
    setAffirmation({ ...result });
  }, [isLoading]);

  return (
    <section className="affirmation-container">
      {!isLoading || Object.keys(affirmation).length ? (
        <p>{affirmation.data}</p>
      ) : (
        <h2 className="loading">Loading Affirmation...</h2>
      )}
    </section>
  );
};

export default Affirmation;
