const Header = (props) => {

  return (
    
    <div className='header'>
       <div className="image"> <h1>Memory Card Game</h1><a href="https://github.com/jerrytnutt" target="_blank" rel="noreferrer"  >
        <div className='gitImg' ></div>
        </a></div>
        <p className="rules">Don't click the same picture twice. Beat your High Score!</p>
        <div>High Score: <p className="score">{props.highScore}</p></div>
        <div>Current Score: <p className="score">{props.currentScore}</p></div>
    
    </div>
  );
}
export default Header;
