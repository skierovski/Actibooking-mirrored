import React from "react";
import {useForm} from "react-hook-form";
import PostDataHandler from "../../data/PostDataHandler";
export default function SignUp() {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = async (values) => {
        await PostDataHandler("https://localhost:7127/api/Account/register", values);
    };
    return (
        <div className="sign-up-form">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input  type="text" required placeholder="FirstName" name="firstname" {...register('firstName')}/>
            <input type="text" required placeholder="LastName" name="lastname" {...register('lastname')}/>
            <input type="text" required placeholder="Email" name="email" {...register('email')}/>
            <input type="text" required placeholder="Password" name="password" {...register('password')}/>
            <input type="text" required placeholder="PhoneNumber" name="phoneNumber" {...register('phoneNumber')}/>
            <input type="submit" />
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