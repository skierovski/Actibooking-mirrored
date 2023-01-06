import {useContext, useRef} from "react";
import styles from "./AddChildForm.module.css";
import Input from "../../DefaultModels/Input/Input";
import AccountContext from "../../../Context/account-ctx";
import SignUpPostDataHandler from "../../FetchMethods/PostMethods/SignUpPostDataHandler";

const AddChildForm = () => {

    const account_ctx = useContext(AccountContext)
    const enteredFirstName = useRef()
    const enteredLastName = useRef()
    const enteredBirthDate = useRef()

    const onSubmitChild = event => {
        event.preventDefault();
        const addChildObject = {
          actiBookingUserId: account_ctx.userData.id,
          name:enteredFirstName.current.getValue(),
          lastName:enteredLastName.current.getValue(),
          birthDate:enteredBirthDate.current.getValue(),
        }
        SignUpPostDataHandler("https://localhost:7127/api/User/add-child", addChildObject)
        setTimeout(()=>{
            account_ctx.ReloadData();
            account_ctx.setAddChildModal(false);
        },100)
      }

    return (
        <form onSubmit={onSubmitChild} className={styles.addChildForm}>
            <Input id={1} type={'text'} label={"First name"} ref={enteredFirstName}/>
            <Input id={2} type={'text'} label={"Last name"} ref={enteredLastName}/>
            <Input id={3} type={'date'} label={"Birth date"} ref={enteredBirthDate}/>
            <button type="submit">Add child</button>
        </form>
    )
}
export default AddChildForm;