import React from 'react';
 
function Blanks({word,correctLetters}){

const guessWord=word.toUpperCase().split('');

const fullBlanksByCorrectLetters=(letter)=>{
   return correctLetters.includes(letter)?letter:'___'
}

    return (
        
    <ul style={{listStyle:'none'}}>
       
        {guessWord.map((letter,index) =><li key={index} style={{width:'25px', border:'1px solid rgba(0, 0, 0, 0.08)'}} >
                         {fullBlanksByCorrectLetters(letter)
                         }
                               </li>)
        }
            </ul> 
    )                               
}

export default Blanks