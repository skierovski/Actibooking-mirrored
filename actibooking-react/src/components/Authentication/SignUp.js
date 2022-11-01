import React from "react";
import {useForm} from "react-hook-form";

export default function SignUp() {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {

    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="FirstName" name="FirstName" ref={register}/>
            <input type="text" placeholder="FirstName" name="FirstName" ref={register}/>
            <input type="text" placeholder="FirstName" name="FirstName" ref={register}/>
            <input type="text" placeholder="FirstName" name="FirstName" ref={register}/>
        </form>
    );


}