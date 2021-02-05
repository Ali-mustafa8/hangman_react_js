import React from 'react';

function KeyboardButtons({word,guessLetter,setGuessLetter,hangman,setHangman,setCorrectLetters}){
 
const letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N', 'O','P',
'Q','R','S','T','U','V','W','X','Y','Z']
const w=word.toUpperCase().split('')

const collectCorrectLetters=(letter)=>{
    if(w.includes(letter))
    setCorrectLetters(prevItems => [...prevItems,letter])
    else
    setHangman(hangman+1)
  }

    return (
        
        letters.map(letter=> 
            hangman!=5?
                <button onClick={(e)=>{
                                     e.preventDefault()
                                     setGuessLetter(e.target.value)
                                    collectCorrectLetters(e.target.value)
                                    e.target.disabled="true"
                                    }
                                } 
                                     value={letter}>{letter}</button>
                :<button disabled>{letter}</button>
           ) 
    )
}

export default KeyboardButtons