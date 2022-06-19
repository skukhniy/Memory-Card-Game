import React from 'react';

export default function Counter({ bestScore, score }) {
  return (
    <div id="counter">
      <h4>
        Best Score:
        {`${bestScore}`}
      </h4>
      <h4>
        Score:
        {`${score}`}
      </h4>
    </div>
  );
}
