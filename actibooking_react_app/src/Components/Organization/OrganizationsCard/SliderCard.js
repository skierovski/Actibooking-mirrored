import React from "react";
import styles from './SliderCard.module.css'

const SliderCard = (props) => {
    return(
        <div className={styles.organization}>
            <img alt="logo" src={props.logoUrl}></img>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.adress}>{props.adress}</p>
            </div>
    )
}

export default SliderCard;