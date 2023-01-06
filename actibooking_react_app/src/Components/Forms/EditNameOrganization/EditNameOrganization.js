import { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./EditNameOrganization.module.css";
import CookiesContext from "../../../Context/cookies-context";
import PutDataHandler from "../../FetchMethods/PutMethods/PutDataHandler";
import Input from "../../DefaultModels/Input/Input";
import SuccessfullyRegisteredModal from "../../Authorization/AuthorizationModals/SuccessfullyRegisteredModal";

const EditNameOrganization = (props) => {
  const cookies_ctx = useContext(CookiesContext);
  const enteredName = useRef();

  const [isSuccessfull, setIsSuccessfull] = useState();
  useEffect(() => {
    enteredName.current.setDefaultValue(props.Name);
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let userData = {
      id: props.id,
      name: enteredName.current.getValue(),
    };
    PutDataHandler(
      "https://localhost:7127/api/Organizations/update-name",
      userData,
      cookies_ctx.GetCookie("token")
    );
    setIsSuccessfull(true);
  };

  return (
    <>
      {isSuccessfull &&
        ReactDOM.createPortal(
          <SuccessfullyRegisteredModal
            closeModal={() => setIsSuccessfull(false)}
          />,
          document.getElementById("modal-root")
        )}
      <form onSubmit={onSubmitHandler}>
        <div className={styles.login_controls}>
          <div className={styles.login_control}>
            <Input label="Name" required={true} ref={enteredName} />
          </div>
        </div>
        <div className={styles.login_actions}>
          <button className={styles.create_button} type="submit">
            Edit Name
          </button>
        </div>
      </form>
    </>
  );
};
export default EditNameOrganization;
