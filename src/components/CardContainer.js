import React from 'react';

export default function CardContainer({ imgSrc }) {
  return (
    <div className="cardContainer">
      <img className="cardImg" src={imgSrc} alt="obi-wan" />
      <h3>obi-Wan</h3>
    </div>
  );
}
