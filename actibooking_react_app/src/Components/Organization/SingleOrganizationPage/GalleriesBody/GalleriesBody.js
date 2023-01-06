import styles from './GalleriesBody.module.css'
import React, {  useContext, useEffect, useRef, useState } from "react";
import { storage } from "../../../../firebase";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,}
   from "firebase/storage";

const GalleriesBody = (props) => {
    const [imageUrls, setImageUrls] = useState([]);
    const imagesListRef = ref(storage, `galery/${props.id}/`);
    useEffect(() => {
      listAll(imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      });
    }, []);
        return (
            <div className={styles.trainersContainer}>
                {/* {organizationTrainers.map(t => <div>{t.name}</div>)} */}
                {imageUrls.map((url) => {
        return <img className={styles.NewImage} src={url} />;
      })}
             </div>
        )
}

export default GalleriesBody;