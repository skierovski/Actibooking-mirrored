import styles from './VideoWrapper.module.css';
import videoBg from '../../../Assets/Actibooking-promo.mp4'

const VideoWrapper = props => {
  return (
    <div className={styles.videoWrapper}>
        <div className={styles.content}>{props.children}</div>
        <video src={videoBg} autoPlay loop muted></video>
    </div>
  );
}

export default VideoWrapper;
