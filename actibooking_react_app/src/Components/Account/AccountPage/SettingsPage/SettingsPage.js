import styles from './SettingsPage.module.css';
import { useForm } from "react-hook-form";
import SecurityPage from './SecurityPanel/SecurityPanel';
import PutDataHandler from '../../../FetchMethods/PutMethods/PutDataHandler';

const SettingsPage = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        data["ActiBookingUserId"] = props.id;
        console.log(data)
        PutDataHandler("https://localhost:7127/api/User",data)
    };
    return (
        <>
        <div className={styles.Settings}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.Inputs}>
                    <div className={styles.InputRow}>
                    <label>First name:</label>
                <input {...register("firstName")} />
                </div>
                <div className={styles.InputRow}>
                <label>Last name:</label>
                <input {...register("lastName")} />
                </div>
                <div className={styles.InputRow}>
                <label>Birth date:</label>
                <input type="date" {...register("birthDate")} />
                </div>
                <div className={styles.InputRow}>
                <label>Gender:</label>
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                </div>              
            <input type="submit" />
            </div>
            </form>
        </div>
        <SecurityPage/>
        </>
    )
}

export default SettingsPage;