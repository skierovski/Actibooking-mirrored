import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  let buttonContainerStyle = ` ${
    props.containerStyle ? props.containerStyle : "button-container"
  }`;
  let buttonHrefStyle = ` ${
    props.hrefStyle ? props.hrefStyle : "button-small"
  }`;
  return (
    <div className={buttonContainerStyle}>
      <Link className={buttonHrefStyle} to={props.href}>
        {props.value}
      </Link>
    </div>
  );
};

export default Button;
  