import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Navibar.css"

const NaviBar = () => {
    const [login, setLogin] = useState("Login")
    
    const LoginHandler = () => {
        if(login === "Login") setLogin("Logout")
        else setLogin("Login")
    }

    return(
        <div className="Navibar">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/Organization">Organization</Link></div>
            <div><button className="nav-language" onClick = {LoginHandler}>{login}</button></div>
        </div>
    ) 
}

export default NaviBar;