import React, { useState, useEffect } from "react";

import { useGlobalContext } from "../../context";

const Image = ({ imageNumber }) => {
  const { getRelevantData, isLoading } = useGlobalContext();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (isLoading) return;
    const imgOne = getRelevantData("dailyPicture1");
    const imgTwo = getRelevantData("dailyPicture2");
    setImages([imgOne, imgTwo]);
  }, [isLoading]);

  return (
    <section className="images-container">
      {images.length ? (
        <figure>
          <img src={images[imageNumber].data} alt="" />
        </figure>
      ) : (
        <h2 className="loading">Loading Image...</h2>
      )}
    </section>
  );
};

export default Image;
