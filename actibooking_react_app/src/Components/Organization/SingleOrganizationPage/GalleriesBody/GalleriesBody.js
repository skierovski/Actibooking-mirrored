import styles from "./GalleriesBody.module.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { storage } from "../../../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

const GalleriesBody = (props) => {
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, `galery/${props.id}/`);
  const image = []
  const widths = [ 500, 1000, 1600 ]
  const ratios = [ 2.2, 4, 6, 8 ]
  imageUrls.forEach((url)=>{
    image.push({src: url,aspect_ratio: 16/9,})
  })
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
{/*       <Gallery {...{image, widths, ratios}} /> */}
{/*       {imageUrls.map((url) => {
        return <img className={styles.NewImage} src={url} />;
      })} */}
    </div>
  );
};

export default GalleriesBody;
