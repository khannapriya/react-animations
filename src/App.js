import React , {useEffect, useState} from 'react';
import Flashcardlist from './flashcardlist';
import './app.css';
import axios from 'axios';


function App() {

  const [flashcards, setFlashcards] = useState(sample_data);
  
  useEffect(()=>{
    axios.get('https://opentdb.com/api.php?amount=10').then(res=>{
      
      setFlashcards(res.data.results.map((questionItem , index)=>{
        
        const answer= questionItem.correct_answer;
        const options =[...questionItem.incorrect_answers, answer];

        return {
          id:`${index} - ${Date.now()}`,
          question:questionItem.question,
          answer:questionItem.correct_answer,
          options: options.sort(()=>Math.random() )
        }
      })
      )
    })
  })



  return (
    <div className="App"> 

    <Flashcardlist flashcards={flashcards}/>
    </div>
  );
}


const sample_data = [
  {
    id:1,
    question:'What is 2+ 5',
    answer: '7',
    options:[
      '12','7','122','90'
    ]

  },
  {
    id:2,
    question:'What is 2 * 5',
    answer: '10',
    options:[
      '12','7','10','90'
    ]
    
  }
]
export default App;
