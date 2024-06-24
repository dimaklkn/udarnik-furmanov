import React from "react";
import { useGlobalContext } from "../context";
import { VKShareButton, VKIcon } from "react-share";

const Summary = () => {
  const { resultYearObject } = useGlobalContext();
  const { events, year } = resultYearObject;

  return (
    <div className="container summary">
      <h1>{year} год</h1>
      <p>Событий и фактов в номере: {events.length}</p>
      <VKShareButton
        url={"https://udarnik-furmanov.netlify.app/"}
        quote={"События прошлого в фурмановской газете Ударник"}
        hashtag="#Ударник-Фурмнов"
        className="summary__share-button"
      >
        <VKIcon size={24} round={true} />
      </VKShareButton>
    </div>
  );
};

export default Summary;
