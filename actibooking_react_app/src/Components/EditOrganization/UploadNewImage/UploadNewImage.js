import React, { useState } from "react";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import styles from "./UploadNewImage.module.css";
function UploadNewImage(props) {
  const [file, setFile] = useState();
  const [imageURL, setImageURL] = useState([]);
  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = () => {
    if (file == null) return;
    const imageRef = ref(storage, `images/${file.name + v4()}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageURL(url);
      });
    });
  };

  return (
    <>
      <img className={styles.NewImage} src={props.oldUrl} alt="Old Logo" />
      <input type="file" onChange={saveFile} />
      <input type="button" value="upload" onClick={uploadFile} />
      <img className={styles.NewImage} src={imageURL}></img>
    </>
  );
}

export default UploadNewImage;
