import React, { useState } from 'react';
import './App.css';
import GameDisplay from './components/GameDisplay';
import Header from './components/Header';

function App() {
  const [score, setScore] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <GameDisplay
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default App;
