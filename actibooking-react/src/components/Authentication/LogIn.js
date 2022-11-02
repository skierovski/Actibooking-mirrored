import "./LogIn.css"
import React, {useState} from "react";
import PostDataHandler from "../../data/PostDataHandler";

const LogIn = () => {

    const [token, setToken] = useState(null);
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
        setToken(response.ok);
    }

    const onSubmitHandler = event =>{
        event.preventDefault();
        PostDataHandler('https://localhost:7127/api/Account/login', userInput, responseHandler);
        setUserInput({
            email:'',
            password:''
        })
    }
    if (token === true) return (<h1>Success</h1>)
    else if (token === false) return (<h1>Login Failed</h1>)
    else return (
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