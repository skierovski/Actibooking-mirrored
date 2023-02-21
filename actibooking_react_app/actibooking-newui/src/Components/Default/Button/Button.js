import './Button.css'


const Button = (props) => {
    
    console.log(props)

    return ( 
        <button className={`Button ${props.animation}`} style={props.style} onClick={() => props.function(props.functionProps)}>{props.text}</button>
    );
    
}
export default Button;