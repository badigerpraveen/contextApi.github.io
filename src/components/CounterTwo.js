import React from "react"; 
import {useReducer} from "react";

const intialState = {
    firstCounter : 0 
} ;
const reducer = (state ,action )=>{ 
    switch(action.type){ 
     case 'increment': 
      return  { firstCounter : state.firstCounter + action.value} ;
     case 'decerement':
        return{ firstCounter : state.firstCounter - action.value} ;;
     case  'reset':
        return  intialState ;
      default :
       return state  
    }
   
}

function COunterTwo(){ 
    const [count , dispatch] = useReducer(reducer, intialState)
  
    return(<>
    <hr></hr>
    <h2> useReducer Hook With stae Object & Action Object  (complex state & action)</h2>
      <div>count {count.firstCounter} </div>
      <button onClick={()=>dispatch( {type: 'increment' , value :1})}> Increment 1 </button> 
      <button onClick={()=>dispatch( {type :'decerement' , value : 1})}> Decrement 1</button> 
      <button onClick={()=>dispatch( {type: 'increment' ,  value  :5})}> Increment 5</button> 
      <button onClick={()=>dispatch( {type :'decerement' , value : 5})}> Decrement 5</button>
      <button onClick={()=>dispatch( {type :'reset'})}> Rset</button>
    </>)
} 

export default COunterTwo ;

