import React, { useCallback, useRef, useState } from 'react';
import Webcam from "react-webcam";
import SectionTitle from '../../../DefaultModels/Titles/SectionTitle';
import { MdAddAPhoto } from "react-icons/md";
import styles from "./WebcamCapture.module.css";

const videoConstraints = {
    width: 440,
    height: 400,
    facingMode: "user"
};

const WebcamCapture = () => {

    const [image,setImage]=useState('');
    const webcamRef = useRef(null);

    
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });
    return (
        <div>
            <div>
                {image == '' ? <Webcam className={styles.Webcam}
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <div className={styles.AddPhoto} onClick={(e) => {e.preventDefault();setImage('')}}>
                        <MdAddAPhoto color='green' size={25}/><SectionTitle value={"Retake Image"}/>
                    </div>
                    :
                    <div className={styles.AddPhoto} onClick={(e) => {e.preventDefault();capture();}}>
                        <MdAddAPhoto color='green' size={25}/><SectionTitle value={"Capture"}/>
                    </div>
                }
            </div>
        </div>
    );
};

export default WebcamCapture