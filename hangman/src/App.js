import React,{useEffect, useState} from 'react';
import KeyboardButtons from './components/keyboard'
import Blanks from './components/blanks'
import Hangman from './components/hangman'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [word,setWord]=useState('')
  const [hangman,setHangman]=useState(0)
  const [guessLetter,setGuessLetter]=useState('')
  const [correctLetters,setCorrectLetters] =useState([])

useEffect(()=>{
  fetch('https://random-word-api.herokuapp.com/word?number=1')
  .then(response => response.json())
  .then(data =>{ setWord(data[0])
                 setIsLoading(false)
                })
  .catch(err=>console.log(err))
},[setWord,setIsLoading])


  return (
    <div className="App">
{ isLoading ? 
        ("loading...")
        :(<>
        
         <KeyboardButtons word={word} guessLetter={guessLetter} setGuessLetter={setGuessLetter} hangman={hangman} setHangman={setHangman} setCorrectLetters={setCorrectLetters}/><br></br>
         <Blanks word={word} correctLetters={correctLetters} guessLetter={guessLetter}  /><br></br>
         <Hangman hangman={hangman}/>
         <button onClick={()=>{window.location.reload(false)}}>play Again</button>
         </>)
      
}
    </div>
  );


}

export default App;
