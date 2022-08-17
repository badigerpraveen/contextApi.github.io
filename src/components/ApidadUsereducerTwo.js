import React from "react"; 
import {useReducer,useEffect} from 'react' ;
import  axios from 'axios' ;

const intialState = {
 loding : true ,
 error : '',
 post : {}
}

const reducer =  (state , action) => {
    switch(action.type){
        case 'FETCH_SUCESS':
            return {
                loding: false, 
                error : '',
                post : action.playload ,
            }
          case 'FETCH_FAIL':
           return {
            loding : false ,
            error : "Something Went wrong" ,
            post : {},
           }  
          default : 
           return state ;  
    }     

}


function ApidataUsereducerTwo(){
    const [state , dispatch]  = useReducer(reducer ,intialState)
    useEffect(()=>{
       // console.log("praveen");
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
         .then((response)=>{
            dispatch({type:'FETCH_SUCESS' , playload: response.data})
         })
         .catch((error)=>{
          dispatch({type:'FETCH_FAIL'})    
        } )
      },[])  
   
   return(<>
       <h2>Fetching APi data with useReducer </h2>  
       {state.loding ? 'Loding':  `Tetle is :  ${state.post.title}` }
       { state.error ? state.error : null} 
    

    </>)
} 

export default ApidataUsereducerTwo ;