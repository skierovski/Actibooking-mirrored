import styles from "./Input.module.css";

const Input = props =>{
    return (
        <div className={`${styles.control} ${props.isValid===false ? styles.invalid : ''}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input 
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            required={props.required}
            minLength={props.minLength}
            maxLength={props.maxLength}
            pattern={props.pattern}
            placeholder={props.placeholder}
            />
        </div>
    );
}
export default Input;