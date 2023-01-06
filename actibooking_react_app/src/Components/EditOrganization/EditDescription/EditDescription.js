/* import styles from "./EditDescription.module.css";
import React from "react";
import ReactDOM from "react-dom";
import TextEditor from "../../DefaultModels/TextEditor/TextEditor";

const EditDescription = () => {
  return <TextEditor />;
};

export default EditDescription;
 */

import React, { useContext, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styles from "./EditDescription.module.css";
import CookiesContext from "../../../Context/cookies-context";
import PutDataHandler from "../../FetchMethods/PutMethods/PutDataHandler";
import Input from "../../DefaultModels/Input/Input";
import SuccessfullyRegisteredModal from "../../Authorization/AuthorizationModals/SuccessfullyRegisteredModal";

const EditDescription = (props) => {
  const [description, setDesciption] = useState();

  const cookies_ctx = useContext(CookiesContext);
  const [isSuccessfull, setIsSuccessfull] = useState();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let userData = {
      id: props.id,
      description: description,
    };
    PutDataHandler(
      "https://localhost:7127/api/Organizations/update-description",
      userData,
      cookies_ctx.GetCookie("token")
    );
    setIsSuccessfull(true);
  };

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
          setDesciption(data);
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />

      <form onSubmit={onSubmitHandler}>
        <div className={styles.login_actions}>
          <button className={styles.create_button} type="submit">
            Edit Description
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDescription;
