import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Navibar.css"

const NaviBar = (props) => {
    const [login, setLogin] = useState("Login")
    
    const LoginHandler = () => {
        if(login === "Login")
        {
            setLogin("Logout");
            props.isLogin(true);
        }
        else{
            setLogin("Login");
            props.isLogin(false);
        }
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