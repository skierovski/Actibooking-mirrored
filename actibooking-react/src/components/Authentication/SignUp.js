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
        
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
        <p class="text-center fs-4">Register</p>
            <div className="row mt-3">
                <div className="col">
            <input className="form-control" type="text" required placeholder="FirstName" name="firstname" {...register('firstname')}/>
            </div>
            <div className="col">
            <input className="form-control" type="text" required placeholder="LastName" name="lastname" {...register('lastname')}/>
            </div>
            </div>
            <div className="row mt-3">
            <div className="col">
            <input className="form-control" type="email" required placeholder="Email" name="email" {...register('email')}/>
            </div>
            <div className="col">
            <input className="form-control" type="password" placeholder="Password" name="password" {...register('password')} pattern="(?=.*\d)(?=.*[\W_]).{5,}" required/>
            </div>
            </div>
            <div className="row mt-3">
                <div className="col-8">
            <input className="form-control input-lg" type="text" required placeholder="PhoneNumber" name="phoneNumber" minLength={9} {...register('phoneNumber')}/>
            </div>
            <div className="col-4">
            <input className="form-control btn btn-primary " type="submit"/>
            </div>
            </div>
        </div>
        </form>
    );
}

// "email": "user@example.com",
// "password": "string",
// "firstName": "string",
// "lastName": "string",
// "phoneNumber": "string",
// "roles": [
//   "string"