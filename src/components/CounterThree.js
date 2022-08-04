import React from "react"; 
import {useReducer} from "react";

const intialState = 0 ;
const reducer = (state ,action )=>{ 
    switch(action){ 
     case 'increment': 
      return  state + 1 ;
     case 'decerement':
        return state - 1 ;
     case  'reset':
        return  intialState ;
      default :
       return state  
    }
   
}

function COunterThree(){ 
    const [count , dispatch] = useReducer(reducer, intialState);
    const [count2 , dispatch2] = useReducer(reducer, intialState)
  
    return(<>
    <hr></hr>
    <h2> Multiple useReducers </h2>
      <div>count1 {count} </div>
      <button onClick={()=>dispatch('increment')}> Increment</button> 
      <button onClick={()=>dispatch('decerement')}> Decrement</button>
      <button onClick={()=>dispatch('reset')}> Rset</button> 
      <hr></hr> 
      <div>count2 {count2} </div>
      <button onClick={()=>dispatch2('increment')}> Increment</button> 
      <button onClick={()=>dispatch2('decerement')}> Decrement</button>
      <button onClick={()=>dispatch2('reset')}> Rset</button>
      <hr></hr>
    </>)
} 

export default COunterThree ;

