import React, { useState } from 'react';
import CardContainer from './CardContainer';
import cardData from '../cardData';

export default function GameDisplay({
  score, setScore, bestScore, setBestScore,
}) {
  // sets up state that will track history of cards clicked
  const [history, setHistory] = useState([]);

  // will shuffle the character array on each render
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(cardData);

  // an array of card components
  const renderCards = cardData.map((chars) => (
    <CardContainer
      imgSrc={chars.image}
      name={chars.name}
      id={chars.id}
      history={history}
      setHistory={setHistory}
      score={score}
      setScore={setScore}
      bestScore={bestScore}
      setBestScore={setBestScore}
    />
  ));

  return (
    <div id="gameDisplay">
      {renderCards}
    </div>
  );
}
