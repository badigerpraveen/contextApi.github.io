import React from "react"; 
import { useState , useMemo } from "react"; 

function Usememo(){
const [countOne, setCountOne] = useState(0); 
const [countTwo, setCountTwo] = useState(0);

const counterOne = () =>{ 
 setCountOne(countOne + 1);
} 

const counterTwo = () =>{
   setCountTwo(countTwo + 1);
} 

const isEven = useMemo(()=>{ 
    let i = 0
    while(i < 200000000) i++ ;
    return countOne % 2 === 0 ;
},[counterOne])
 
    return(<>
  <h2> useMemo Hook  </h2> 
  <button onClick={counterOne}> counterOne - {countOne} </button> 
  <span>{isEven ? 'Even' : 'Odd'}</span>
   <br></br>
  <button onClick={counterTwo}> counterTwo - {countTwo} </button>
    </>)
}
export default Usememo ;