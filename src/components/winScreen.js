import React, {useEffect } from "react";
export const WinScreen = (props) => {

const myRef = React.createRef();
useEffect(() => {
  if(props.wonState === true){
    myRef.current.className = 'winScreen'
  }else{
    myRef.current.className = 'hidden'

  } 
  });

  return (
    
    <div className='hidden' ref={myRef}>
        <h1>You Won!</h1>
        <p className="rules">Click Here to play again!</p>
        <button onClick={props.resetGame}>Reset</button>
    </div>
  );
}
export default WinScreen