import React from 'react';

export default function CardContainer({
  imgSrc, name, id, history, setHistory, score, setScore, setBestScore, bestScore,
}) {
  if (bestScore <= score) { // update best score if it is suprassed
    setBestScore(score);
  }
  function updateHistory() {
    // if same image isnt clicked, update score and add to history array
    if (!history.includes(id)) {
      setHistory([...history, id]);
      setScore(score + 1);
    } else {
      setHistory([]); // reset score and history tracker
      setScore(0);
    }
  }
  return (
    <div className="cardContainer">
      <img className="cardImg" src={imgSrc} alt={name} onClick={updateHistory} role="presentation" />
      <h3>{name}</h3>
    </div>
  );
}
