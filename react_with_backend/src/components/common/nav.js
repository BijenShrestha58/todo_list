import { useState } from "react"
export const Nav=(props)=>{
    return(
    <div className="nav">
        <div className="nav-items">
            <button className="nav-item">Home</button>
            <button className="nav-item">About</button>
            <button className="nav-item">Function</button>
            <button className="nav-item">Contacts</button>
        </div>
        <button className="login-button" onClick={props.open}>Login</button>
    </div>
    )
}