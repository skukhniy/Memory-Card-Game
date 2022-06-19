import React, { useState } from 'react';
import './App.css';
import GameDisplay from './components/GameDisplay';
import Header from './components/Header';

function App() {
  const [history, setHistory] = useState([]);

  return (
    <div className="App">
      <Header />
      <GameDisplay history={history} setHistory={setHistory} />
    </div>
  );
}

export default App;
