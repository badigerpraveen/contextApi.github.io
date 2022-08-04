import React from "react";
import { useContext } from "react";
import { countContext } from "../App";

function ComponentE() {
    const counter = useContext(countContext);
    return (<>
        <h2>Component E {counter.countState}</h2>
        <button onClick={() => counter.countDispatch('increment')}> Increment</button>
        <button onClick={() => counter.countDispatch('decerement')}> Decrement</button>
        <button onClick={() => counter.countDispatch('reset')}> Rset</button>



    </>)
}

export default ComponentE;