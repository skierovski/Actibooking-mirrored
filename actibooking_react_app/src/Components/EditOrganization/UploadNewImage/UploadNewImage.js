import React, { useState } from "react";
/* import * as fs from "fs" */
const UploadNewImage = (props) => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
/*   const fs = require("fs"); */

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
/*       fs.writeFileSync(`./images/${filename}`, image); */
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
};

export default UploadNewImage;
