import React from 'react';
import first from '../2.png'
import second from '../3.png'
import third from '../4.png'
import fourth from '../5.png'
import fifth from '../6.png'
import six from '../7.png'

function Hangman({hangman}){
  const  images =[
        first,
        second,
        third,
        fourth, 
        fifth,
        six
        ]

return (<>
<img src={images[hangman]} style={{height:100,width:100}}/> 
</>
)
}
export default Hangman