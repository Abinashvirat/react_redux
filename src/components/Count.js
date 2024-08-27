import React from "react";
import { useSelector } from "react-redux";
const Count=()=>{
    const x=useSelector(state=>state);
    return (
        <div>
            <h2>{x}</h2>
        </div>
    )
}

export default Count;