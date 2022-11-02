import React from "react";
import {useForm} from "react-hook-form";

function SignUp() {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        alert(data)
    }
}

export default SignUpForm = () => {
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="FirstName" name="firstname" ref={register}/>
            <input type="text" placeholder="LastName" name="lastname" ref={register}/>
            <input type="text" placeholder="Password" name="password" ref={register}/>
            <input type="text" placeholder="PhoneNumber" name="phoneNumber" ref={register}/>
            <input type="text" placeholder="Email" name="email" ref={register}/>
            <input type="submit"/>
        </form>
        </div>
    );
}