import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const Quotes = () => {
  const { getRelevantData, isLoading } = useGlobalContext();
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    if (isLoading) return;
    const quote = getRelevantData("dailyQuote");
    const stoicQuote = getRelevantData("dailyStoicQuote");
    setQuotes([quote, stoicQuote]);
  }, [isLoading]);

  return (
    <section className="quotes-container">
      {quotes.length ? (
        <>
          {quotes.map((quote, index) => {
            if (quote.APIName === "dailyQuote") {
              return (
                <article
                  className="quote"
                  id="dailyQuote-container"
                  key={index}
                >
                  <p>{quote.data.quoteText}</p>
                  <p>{quote.data.quoteAuthor}</p>
                </article>
              );
            }
            if (quote.APIName === "dailyStoicQuote") {
              return (
                <article
                  className="quote"
                  id="dailyStoicQuote-container"
                  key={index}
                >
                  <p>{quote.data.body}</p>
                  <p>{quote.data.author}</p>
                </article>
              );
            }
          })}
        </>
      ) : (
        <h2 className="loading">Loading Quotes....</h2>
      )}
    </section>
  );
};

export default Quotes;
