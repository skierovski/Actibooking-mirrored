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
      <a className={buttonHrefStyle} href={props.href}>
        {props.value}
      </a>
    </div>
  );
};

export default Button;
