
//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
import React from 'react'
import {NavLink} from "raect-router-dom"



let SuccessChild = (props)=>{
    return(
<>
        <h3>{props.name}</h3>
        <h3>{props.address}</h3>
</>
    )
}

export default SuccessChild;