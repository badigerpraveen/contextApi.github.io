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

function COunterOne(){ 
    const [count , dispatch] = useReducer(reducer, intialState)
  
    return(<>
    <hr></hr>
    <h2> useReducer Hook </h2>
      <div>count {count} </div>
      <button onClick={()=>dispatch('increment')}> Increment</button> 
      <button onClick={()=>dispatch('decerement')}> Decrement</button>
      <button onClick={()=>dispatch('reset')}> Rset</button>
    </>)
} 

export default COunterOne ;

