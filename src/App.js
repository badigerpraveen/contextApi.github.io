import React from 'react';
import './App.css';
import ComponentA  from './components/ComponentA';
import {users} from './data';
import COunterOne from './components/CounterOne';
import COunterTwo from './components/CounterTwo';
import COunterThree from './components/CounterThree';
import {useReducer} from 'react';
import ComponentD from './components/ComponentD'; 
import ComponentE from './components/ComponentE';
import ComponentF from './components/ComponentF'; 
import ApiDtatUsereducer from './components/ApidataUsereducer'; 
import ApidataUsereducerTwo from './components/ApidadUsereducerTwo';
import ParentComponent from './components/ParentComponent';
export const userContext = React.createContext();
export const  contextAPI = React.createContext() ;
export const countContext = React.createContext() ;
                         
console.log(users); 

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


function App() { 
  const [count,dispatch] = useReducer(reducer,intialState) ;
  const user = users.map((user)=>{
       return  <p> {user.id}, {user.Name} , {user.city}</p> ;
  })
  //console.log(user);
  return (
    <div className="App">
     hello World
     <countContext.Provider value={{ countState : count , countDispatch : dispatch}}>  
     <userContext.Provider value={user}> 
      <contextAPI.Provider value={"Badiger"}> 
    
       <ComponentA/>
      </contextAPI.Provider>
     
     </userContext.Provider> 
     <UserData/> 
     <COunterOne/> 
     <COunterTwo/>
     <COunterThree/>   
     <h3>useReducer with useContext (Globle Context) managing state with Component D , E , F </h3>    
       Count {count}
      <ComponentD/> 
      <ComponentE/>
      <ComponentF/> 
      <ApiDtatUsereducer/> 
      <ApidataUsereducerTwo/>
      <ParentComponent/>
     </countContext.Provider> 

     </div>
  );
}

function UserData(){
  return(<>
 <h2> Hello </h2> 
 {/* {users.map((user)=>{
   return <p> {user.Name} </p>;
 })} */}
  </>);
}

export default App;
