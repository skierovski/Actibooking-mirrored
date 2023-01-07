import { useContext, useEffect, useRef, useState } from "react";
import AccountContext from "../../../Context/account-ctx";
import Input from "../../DefaultModels/Input/Input";
import PutDataHandler from "../../FetchMethods/PutMethods/PutDataHandler";
import styles from "./SettingsPage.module.css";
import SectionTitle from "../../DefaultModels/Titles/SectionTitle";
import { CgClose } from 'react-icons/cg';

const SettingsPage = () => {
    const account_ctx = useContext(AccountContext);
    const oldEmail = useRef();
    const [newEmail, setNewEmail] = useState(null);
    const oldPassword = useRef();
    const [newPassword, setNewPassword] = useState(null);
    

    useEffect(()=>{
        oldEmail.current.setDefaultValue(account_ctx.userData.email);
    });

    const onSubmit = event => {
        event.preventDefault();
        let data = {
            ActiBookingUserId: account_ctx.userData.id,
        };
        if(newEmail && newEmail!=oldEmail.current.getValue() && !newPassword){
            data.email = newEmail;
        }
        if(newPassword && newPassword!=oldPassword.current.getValue() && !newPassword){
            data.email = newEmail;
        }
        PutDataHandler("https://localhost:7127/api/User", data);
    };

    return (
        <>
        <form onSubmit={onSubmit}>
            <SectionTitle value={"Change Your Email"}/>
            <div className={styles.changeEmail}>
                <div className={styles.changeEmailInputs}>
                    <Input type="email" label="Old email" ref={oldEmail} readOnly={true}/>
                    <Input type="email" label="New email" value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}/>
                    {newEmail && <CgClose size={20} className={styles.closeIcon} onClick={() => setNewEmail('')}/>}
                </div>
                {newEmail && <button className={styles.saveButton} type="submit">Save</button>}
            </div>
            <SectionTitle value={"Change Your Password"}/>
            <div className={styles.changePassword}>
                <div className={styles.changePasswordInputs}>
                    <Input type="password" label="Old password" ref={oldPassword}/>
                    <Input type="password" label="New password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
                    {newPassword && <CgClose size={20} className={styles.closeIcon} onClick={() => setNewPassword('')}/>}
                </div>
                {newPassword && <button className={styles.saveButton} type="submit">Save</button>}
            </div>
        </form>
        </>
    )
}

export default SettingsPage;