import "./MainLogo.css";
import React from "react";
import { useNavigate } from "react-router-dom";


const MainLogo = () => {
    

    let navigate = useNavigate();
    const changeRoute = () =>{
        let path = `/`;
        navigate(path);
    }

    return (
        <div className="MainLogo">
            <span onClick={changeRoute}>Actibooking</span>
        </div>
    );
}

export default MainLogo;