/* import styles from "./EditDescription.module.css";
import React from "react";
import ReactDOM from "react-dom";
import TextEditor from "../../DefaultModels/TextEditor/TextEditor";

const EditDescription = () => {
  return <TextEditor />;
};

export default EditDescription;
 */

import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditDescription = (props) => {
  return (
    <div className="EditDescription">
      <CKEditor
        editor={ClassicEditor}
        data={props.content}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default EditDescription;
