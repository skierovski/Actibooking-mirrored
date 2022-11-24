import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'

const NextArrow=(props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={faCircleArrowRight} style={{
          fontSize: "1.5vw",
         color: "black",
         transform: "translateY(-4vh)"}}/>
      </div>
    );
  }

export default NextArrow;