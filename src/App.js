import './App.css';
import React, {useState} from 'react';
import Header  from './components/header';
import Cards  from './components/cards';
import WinScreen  from './components/winScreen';

function App() {

  const [highScore, updateHighScore] = useState(0)
  const [currentScore, updateCurrentScore] = useState(0)
  const [wonState, updateWonState] = useState(false)

  const changeGameScore = () => {
    if (currentScore >= highScore){
      if (currentScore === 14){
        updateWonState(true)
      }
      updateCurrentScore(currentScore + 1)
      updateHighScore(highScore + 1)

    }else{
    updateCurrentScore(currentScore + 1)
}

}

const resetGame = () => {
  updateHighScore(0)
  updateCurrentScore(0)
  updateWonState(false)
}

return (
    <div className="App">
      <Header currentScore={currentScore} highScore={highScore}/>
      <Cards changeGameScore={changeGameScore} updateCurrentScore={updateCurrentScore} />
      <WinScreen wonState={wonState} resetGame={resetGame}/>
    </div>
  );
}

export default App;
