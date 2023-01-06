import React, {  useContext, useEffect, useRef, useState } from "react";
import { storage } from "../../../firebase";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,}
   from "firebase/storage";
import { v4 } from "uuid";
import PutDataHandler from "../../FetchMethods/PutMethods/PutDataHandler";
import Input from "../../DefaultModels/Input/Input";
import CookiesContext from "../../../Context/cookies-context";
import styles from "./ManagePhotos.module.css";
function ManagePhotos(props) {
  const [file, setFile] = useState();
  const [imageURL, setImageURL] = useState([]);

  const cookies_ctx = useContext(CookiesContext);


  const [isSuccessfull, setIsSuccessfull] = useState();
  const [imageUpload, setImageUpload] = useState(null);
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

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = () => {
    if (file == null) return;
    const imageRef = ref(storage, `galery/${props.id}/${file.name + v4()}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
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
      <input type="file" onChange={saveFile} />
      <input type="button" value="upload" onClick={uploadFile} />
      {imageUrls.map((url) => {
        return <img className={styles.NewImage} src={url} />;
      })}
    </>
  );
}

export default ManagePhotos;
