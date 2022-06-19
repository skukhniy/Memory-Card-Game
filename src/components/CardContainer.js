import React from 'react';

export default function CardContainer({
  imgSrc, name, id, history, setHistory,
}) {
  function updateHistory() {
    setHistory([...history, id]);
  }
  return (
    <div className="cardContainer">
      <img className="cardImg" src={imgSrc} alt={name} onClick={updateHistory} role="presentation" />
      <h3>{name}</h3>
    </div>
  );
}
