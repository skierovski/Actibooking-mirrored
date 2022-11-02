import React from "react";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PostDataHandler from "../../data/PostDataHandler";
import './SignUp.css'
export default function SignUp() {
    const {register, handleSubmit, errors} = useForm();
    let navigate = useNavigate();
    const changeRoute = () =>{
        let path = `/`;
        navigate(path);
    }
    const receiveResponseStatus = status => {
        if (status !== true) {
            console.log("Good");
            changeRoute();
        }
        else console.log("Bad");
    }
    const onSubmit = (values) => {
        const UserData = {
            'email': values.email,
            'password': values.password,
            'firstname': values.firstname,
            'lastname': values.lastname,
            'phoneNumber': values.phoneNumber,
            "roles": [
                "User"
              ]
        }
        console.log(UserData)    
        PostDataHandler('https://localhost:7127/api/Account/register', UserData, receiveResponseStatus)

    };
    return (
        <div className="sign-up-form">
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <input type="text" required placeholder="FirstName" name="firstname" {...register('firstname')}/>
            <input type="text" required placeholder="LastName" name="lastname" {...register('lastname')}/>
            <input type="text" required placeholder="Email" name="email" {...register('email')}/>
            <input type="text" required placeholder="Password" name="password" {...register('password')}/>
            <input type="text" required placeholder="PhoneNumber" name="phoneNumber" {...register('phoneNumber')}/>
            <input className="submit" type="submit"/>
       </form>
        </div>
    );
}

// "email": "user@example.com",
// "password": "string",
// "firstName": "string",
// "lastName": "string",
// "phoneNumber": "string",
// "roles": [
//   "string"