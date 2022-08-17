import React from "react"; 
import {useState , useEffect} from 'react';
import axios from "axios";

function ApiDtatUsereducer(){ 
  const [loding, setLoding] =  useState(true) ; 
  const [error , setError] = useState(''); 
  const [post , setPost] = useState({}) ; 
   useEffect(()=>{
     console.log("praveen");
     axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response)=>{
        setLoding(false)
        setPost(response.data)
        setError('')
        console.log(response.data)
      })
      .catch((error)=>{
         setLoding(false);
         setPost({})
         setError("Some thing went wrong");
      } )
   },[])  

  return(<>
    <h2>  Fetching API data using useStae and UseEffect </h2> 
    {loding ? 'Loding':  `Tetle is :  ${post.title}` }
    { error ? error : null} 

    </>)
} 

export default ApiDtatUsereducer ;