import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons'

const PrevArrow=(props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faCircleArrowLeft} style={{
          fontSize: "1.5vw",
         color: "black",
        transform: "translate(-0.5vw,-4vh)"}}
         />
      </div>
    );
  }

export default PrevArrow