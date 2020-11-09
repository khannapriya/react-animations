
import React, {useState} from 'react';
import Likebutton from './likeButton';

export default function Flashcard({flashcard}) {

    const [flip, setflipCard] = useState(false)
    
    return (
        
    <div className={`card ${flip ?'flip':''}` }
     onClick={ ()=> {setflipCard(!flip)}}>

         <div className="front">
             
             {flashcard.question}
             <div className="flashcard-options">
                 {flashcard.options.map(option=>{
                     return <div className="flashcard-option">{option} </div>
                 })}
             </div>
         </div>
         <div className="back">
         <Likebutton/>
             {flashcard.answer}
             
         </div>
    </div>
  )
}
