import React, {useState} from "react"

const NaviBar = () => {
    const [login, setLogin] = useState("Login")
    
    const LoginHandler = () => {
        if(login === "Login") setLogin("Logout")
        else setLogin("Login")
    }

    return(
        <div className="Navibar">
            <button className="nav-language" value={login} onClick = {LoginHandler}>{login}</button>
        </div>
    ) 
}

export default NaviBar;