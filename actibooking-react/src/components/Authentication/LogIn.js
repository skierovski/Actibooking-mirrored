import "./LogIn.css";
import React, {useState} from "react";
import PostDataHandler from "../../data/PostDataHandler";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LogIn = props => {

    const[isValidInput, setIsValidInput] = useState(true);
    const[userInput, setUserInput] = useState({
        email:'',
        password:''
    })

    const EmailChangeHandler = (event) =>{setUserInput((prevState) => {
        return {...prevState, email: event.target.value};
    })};
    const PasswordChangeHandler = (event) =>{setUserInput((prevState) => {
        return {...prevState, password: event.target.value};
    })};

    const responseHandler = response =>{
        props.setToken(response.token);
        let decodedJWT = jwt_decode(response.token);
        props.authorization(decodedJWT);
    }

    let navigate = useNavigate();
    const changeRoute = () =>{
        let path = `/`;
        navigate(path);
    }
    
    const isLoggedIn = () =>{
        if(localStorage.getItem("token") !== null){changeRoute()};
        setIsValidInput(false);
    }

    const onSubmitHandler = event =>{
        event.preventDefault();
        const response = PostDataHandler('https://localhost:7127/api/Account/login', userInput, responseHandler);
        setTimeout(isLoggedIn, 100);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="login__controls">
                <div className="login__control">
                    <label>Email</label>
                    <input type='email' style={{borderColor: isValidInput? "none":"red"}}  minLength={10} value={userInput.email} onChange={EmailChangeHandler} required={true}/>
                    <label>Password</label>
                    <input type='password' style={{borderColor: isValidInput? "none":"red"}} pattern="(?=.*\d)(?=.*[\W_]).{5,}" value={userInput.password} onChange={PasswordChangeHandler} required={true}/>
                </div>
            </div>
            <div className="login__actions">
                <button className="create-button" type="submit">Login</button>
            </div>
        </form>
    )
}

export default LogIn;