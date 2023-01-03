/* import React, { useState } from "react";
const UploadNewImage = (props) => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(file);
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const saveImageOnServer = (image) => {
      const filename = `organization-${props.id}-${Date.now()}.jpg`;
            fs.writeFileSync(`./images/${filename}`, image);
    };
  };

  return (
    <div>
      <img src={props.oldUrl} alt="Old Logo" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="image-upload">
          'Wybierz zdjęcie'
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleChange}
            style={{ display: "none" }}
          />
        </label>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}; */

/* import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
const UploadNewImage = () => {
  const [files, setFiles] = useState([]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };
  const uploadHandler = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;
    /*     setFiles([...files, file]); */

// upload file
/*    const formData = new FormData();
    formData.append("newFile", file, file.name);
    axios
      .post("http://localhost:8080/upload", formData)
      .then((res) => {
        file.isUploading = false;
        setFiles([...files, file]);
      })
      .catch((err) => {
        // inform the user
        console.error(err);
        removeFile(file.name);
      });
  };

  return (
    <>
      <div className="file-card">
        <div className="file-inputs">
          <input type="file" onChange={uploadHandler} />
          <button>
            <i>
              <FontAwesomeIcon icon={faPlus} />
            </i>
            Upload
          </button>
        </div>

        <p className="main">Supported files</p>
        <p className="info">PDF, JPG, PNG</p>
      </div>
    </>
  ); */
/* };
export default UploadNewImage;
 */

/* import { useState } from 'react'
import FileUpload from './FileUpload';
import FileList from './FileList';

function UploadNewImage() {
  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  return (
    <div className="App">
      <div className="title">Upload file</div>
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
    </div>
  );
}

export default UploadNewImage; */

import React, { useState } from "react";
import ImagePost from "../../FetchMethods/PostMethods/ImagePost";

function UploadNewImage() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const saveFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = () => {
    console.log(file);
    const formData = new FormData();
    formData.append("formFile", file);
    formData.append(fileName, fileName);
    /*   try{
    const res = await axios.post("https://localhost:7127/api/File",formData);
    console.log(res);
  }catch(ex){
    console.log(ex);
  } */
    ImagePost("https://localhost:7127/api/File", formData);
  };

  return (
    <>
      <input type="file" onChange={saveFile} />
      <input type="button" value="upload" onClick={uploadFile} />
    </>
  );
}

export default UploadNewImage;
