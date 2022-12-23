import styles from './SettingsPage.module.css';
import { useForm } from "react-hook-form";
import SecurityPage from './SecurityPanel/SecurityPanel';

const SettingsPage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
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
                <input {...register("birthDate")} />
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