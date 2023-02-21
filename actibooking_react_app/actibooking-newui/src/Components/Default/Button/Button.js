import './Button.css'


const Button = (props) => {
    const animation = props.animation;
    console.log(props)

    if(animation === 'none') {
        return ( 
            <button className="Button" style={props.style} onClick={() => props.function(props.functionProps)}>{props.text}</button>
         );
    }
    else if(animation === 'underline') {
        return(
            <button className="Button-underline" style={props.style} onClick={() => props.function(props.functionProps)}>{props.text}</button>
        )
    }
    else if(animation === 'jump') {
        return(
            <button className="Button-jump" style={props.style} onClick={() => props.function(props.functionProps)}>{props.text}</button>
        )
    }
}
export default Button;