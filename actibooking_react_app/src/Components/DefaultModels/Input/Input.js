import React, { useImperativeHandle, useRef } from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) =>{
    const inputRef = useRef();

    const getValue = () =>{
        return inputRef.current.value;
    };
    const setDefaultValue = (value) =>{
        inputRef.current.value=value;
    }

    useImperativeHandle(ref, ()=>{
        return{
            getValue:getValue,
            setDefaultValue:setDefaultValue
        };
    });

    return (
        <div className={`${styles.control} ${props.isValid===false ? styles.invalid : ''}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input 
            id={props.id}
            type={props.type}
            value={props.value}
            ref={inputRef}
            onChange={props.onChange}
            required={props.required}
            minLength={props.minLength}
            maxLength={props.maxLength}
            pattern={props.pattern}
            placeholder={props.placeholder}
            />
        </div>
    );
});
export default Input;