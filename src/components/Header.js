import React from 'react';
import Counter from './Counter';

export default function Header({ bestScore, score }) {
  return (
    <div className="Header">
      <h1>Star Wars</h1>
      <h1>Memory Game</h1>
      <Counter bestScore={bestScore} score={score} />
    </div>
  );
}
