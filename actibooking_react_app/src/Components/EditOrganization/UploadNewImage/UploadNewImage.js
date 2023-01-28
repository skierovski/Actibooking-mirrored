import React, {  useContext, useEffect, useRef, useState } from "react";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import PutDataHandler from "../../FetchMethods/PutMethods/PutDataHandler";
import Input from "../../DefaultModels/Input/Input";
import CookiesContext from "../../../Context/cookies-context";
import styles from "./UploadNewImage.module.css";
import StyleButton from "../ManagePhotos/ManagePhotos.module.css"
function UploadNewImage(props) {
  const [file, setFile] = useState();
  const [imageURL, setImageURL] = useState([]);

  const cookies_ctx = useContext(CookiesContext);
  const enteredName = useRef();

  const [isSuccessfull, setIsSuccessfull] = useState();


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
    let userData = {
      id: props.id,
      logoUrl: imageURL,
    };
    console.log(userData);
    PutDataHandler(
      "https://localhost:7127/api/Organizations/update-logo",
      userData,
      cookies_ctx.GetCookie("token")
    );
    setIsSuccessfull(true);
  };

  return (
    <>
      <img className={styles.NewImage} src={props.oldUrl} alt="Old Logo" />
      <input className={StyleButton.Button} type="file" onChange={saveFile} />
      <input className={StyleButton.Button}  type="button" value="upload" onClick={uploadFile} />
      <img className={styles.NewImage} src={imageURL}></img>
    </>
  );
}

export default UploadNewImage;
