import "./Button.css";

const Button = props =>{
    let buttonContainerStyle = `button-container ${props.containerStyle}`;
    let buttonHrefStyle = `button-small ${props.hrefStyle}`;
    return(
        <div className={buttonContainerStyle}>
            <a className={buttonHrefStyle} href={props.href}>
            {props.value}
            </a>
        </div>
    )
}

export default Button;