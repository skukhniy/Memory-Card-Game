import React from 'react';
import CardContainer from './CardContainer';
import cardData from '../cardData';

export default function GameDisplay({ history, setHistory }) {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(cardData);

  const renderCards = cardData.map((chars) => (
    <CardContainer
      imgSrc={chars.image}
      name={chars.name}
      id={chars.id}
      history={history}
      setHistory={setHistory}
    />
  ));

  return (
    <div id="gameDisplay">
      {renderCards}
    </div>
  );
}
