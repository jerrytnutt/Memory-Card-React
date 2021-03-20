import React, { useState, useEffect } from "react";
import {cardList} from '../components/cardList.js'

const Cards = (props) => {

  const [selectedCards, setSelectedCards] = useState([]);

  const changeCardArray = (card) => {
    let cardNumber = card.target.id

    if (selectedCards.includes(cardNumber)){
      setSelectedCards([])
      return props.updateCurrentScore(0)
    }else{
      setSelectedCards(selectedCards.concat([cardNumber]))
      return props.changeGameScore()
     }
}
  
  let randomizeList = () => {
    let length = cardList.length 

    for (let i = length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardList[i], cardList[j]] = [cardList[j], cardList[i]];
    }
    
  }
  useEffect(() => {
    randomizeList()
  });

  return (
    
    <div className='cardContainer'>
      {cardList.map((card) => 
      <div className='card' key={card.id}> 
      <img src={card.img} alt='new' id={card.id} onClick={changeCardArray}></img> 
      </div>) 
      }
      </div>
  );
}
export default Cards;
