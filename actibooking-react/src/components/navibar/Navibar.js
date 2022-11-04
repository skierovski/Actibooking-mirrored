import React, {useState} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navibar.css";

const NaviBar = () => {


    const [user, setUser] = useState(null);

    let navigate = useNavigate();
    const changeRoute = () =>{
        let path = `/`;
        navigate(path);
    }

    const logOut = () =>{
        localStorage.clear();
        setUser(null);
        changeRoute();
    }
    return(
            <div className="Navibar">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/Organizations">All Organization</Link></div>
                {localStorage.getItem("token") && <><div><Link to="/Organizations/Types">Organizations types</Link></div><button className="LogOutButton" onClick={logOut}>Log Out</button></>}
                {!localStorage.getItem("token") && 
                <>
                    <div><Link to="/LogIn">Log In</Link></div>
                    <div><Link to="/SignUp">Sign Up</Link></div>
                </>}
            </div>
    )
}

export default NaviBar;