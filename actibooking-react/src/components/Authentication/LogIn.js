import "./LogIn.css";
import React, {useState} from "react";
import PostDataHandler from "../../data/PostDataHandler";
import jwt_decode from "jwt-decode";

const LogIn = props => {

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
        props.setToken(response);
        let decodedJWT = jwt_decode(response);
        props.authorization(decodedJWT);
    }
    

    const onSubmitHandler = event =>{
        event.preventDefault();
        PostDataHandler('https://localhost:7127/api/Account/login', userInput, responseHandler);
        setUserInput({
            email:'',
            password:''
        })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="login__controls">
                <div className="login__control">
                    <label>Email</label>
                    <input type='text' maxLength={100} value={userInput.email} onChange={EmailChangeHandler} required={true}/>
                    <label>Password</label>
                    <input type='text' maxLength={100} value={userInput.password} onChange={PasswordChangeHandler} required={true}/>
                </div>
            </div>
            <div className="login__actions">
                <button className="create-button" type="submit">Login</button>
            </div>
        </form>
    )

}

export default LogIn;