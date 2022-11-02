import React from "react";
import {Link} from "react-router-dom";
import "./Navibar.css";

const NaviBar = props => {

    return(
            <div className="Navibar">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/Organization">Organization</Link></div>
                <div><Link to="/Organizations">All Organization</Link></div>
                {props.userStatus && <button>Log Out</button>}
                {!props.userStatus && 
                <>
                    <div><Link to="/LogIn">Log In</Link></div>
                    <div><Link to="/SignUp">Sign Up</Link></div>
                </>}
            </div>
    ) 
}

export default NaviBar;