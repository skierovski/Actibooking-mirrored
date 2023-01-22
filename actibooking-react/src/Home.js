import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {

    let navigate = useNavigate();
    const changeRoute = () =>{
        let path = `/Organization/Create`;
        navigate(path);
    }


    return (
        <div className="home-page-container">
            {!localStorage.getItem("token") && <div>Home Page</div>}
            {localStorage.getItem("token") && <button style={{"cursor": "pointer"}} onClick={changeRoute}>Create Organization</button>}
        </div>
    )
}
export default Home;