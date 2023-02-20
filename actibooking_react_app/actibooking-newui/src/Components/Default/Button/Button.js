import './Button.css'

const Button = (props) => {
    const animation = props.animation;

    if(animation === 'none') {
        return ( 
            <button className="Button" style={props.style}>{props.text}</button>
         );
    }
    else if(animation === 'underline') {
        return(
            <button className="Button-underline" style={props.style}>{props.text}</button>
        )
    }
    else if(animation === 'jump') {
        return(
            <button className="Button-jump" style={props.style}>{props.text}</button>
        )
    }
}
export default Button;