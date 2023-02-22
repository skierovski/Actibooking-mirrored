import styles from "./VideoWrapper.module.css";
import { createPortal } from "react-dom";

const WideoWrapper = ()=>{
    return (
        createPortal(
        <div className={styles.videoWrapper_wideo}>
            <video src="/Video/Actibooking-promo.mp4" autoPlay={true} muted={true} loop={true}/>
        </div>
        , document.getElementById("portal"))
    )
}

export default WideoWrapper; 