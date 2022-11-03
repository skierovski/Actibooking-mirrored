import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = props => {

    let navigate = useNavigate();
    const changeRoute = () =>{
        let path = `/Organization/Create`;
        navigate(path);
    }


    return (
        <div className="home-page-container">
            {!props.userStatus && <div>Home Page</div>}
            {props.userStatus && <button onClick={changeRoute}>Create Organization</button>}
        </div>
    )
}
export default Home;