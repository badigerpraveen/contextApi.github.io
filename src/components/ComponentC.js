import React from "react"; 
import { useContext } from "react";
import { userContext , contextAPI} from "../App";

function ComponentC(){
    const name = useContext(userContext);
    const lname =  useContext(contextAPI);
    return(<div> 
    <h2>Component C </h2> 
   
   {/* <userContext.Consumer>
    {
          user =>{
            return (
                 <contextAPI.Consumer>
                    {
                        lname =>{
                            return <h1> {user} , {lname } </h1>  ;
                        }
                    }
                 </contextAPI.Consumer>
            ) ;
          }
    }
   </userContext.Consumer> */}
  <p>  {name} <br></br></p> {lname}
   
    </div>);
} 

export default ComponentC ;