import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Affirmation = () => {
  const { getRelevantData, isLoading } = useGlobalContext();

  useEffect(() => {
    if (isLoading) return;
    getRelevantData("dailyAffirmation");
  }, [isLoading]);

  return (
    <section className="affirmation-container">
      {isLoading ? (
        <h2 className="loading">Loading Affirmation...</h2>
      ) : (
        <h2>x</h2>
      )}
    </section>
  );
};

export default Affirmation;
