import React, { memo } from "react"; 

function Count({text,count}){ 
  console.log('Rendering Count - ', text )
    return(<>
      <p> This is count Component </p>  
      {text} - {count}
    </>)
} 

export default   React.memo(Count) ;