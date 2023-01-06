import styles from './SettingsPage.module.css';
import SecurityPage from './SecurityPanel/SecurityPanel';
import PutDataHandler from '../../FetchMethods/PutMethods/PutDataHandler';
import Input from '../../DefaultModels/Input/Input';
import { useRef } from 'react';

const SettingsPage = (props) => {
    const enteredFirstName = useRef();
    const enteredLastName = useRef();
    const enteredBirthDate = useRef();
    const enteredGender= useRef();

    const onSubmit = event => {
        event.preventDefault();
        let data = {
            firstName:enteredFirstName.current.getValue(),
            lastName:enteredLastName.current.getValue(),
            birthDate:enteredBirthDate.current.getValue(),
            gender:enteredGender.current.getValue(),
        };
        data["ActiBookingUserId"] = props.id;
        console.log(data);
        PutDataHandler("https://localhost:7127/api/User",data);
    };
    return (
        <>
        <div className={styles.Settings}>
            <form onSubmit={onSubmit}>
                <div className={styles.Inputs}>
                <div className={styles.InputRow}>
                    <Input id={1} type={'text'} label={"First name"} ref={enteredFirstName}/>
                </div>
                <div className={styles.InputRow}>
                    <Input id={2} type={'text'} label={"Last name"} ref={enteredLastName}/>
                </div>
                <div className={styles.InputRow}>
                    <Input id={3} type={'date'} label={"Birth date"} ref={enteredBirthDate}/>
                </div>
                <div className={styles.InputRow}>
                    <Input id={4} type={"select"} label={"Gender"} ref={enteredGender} options={["male", "female", "undefined"]}/>
                    {/* <label>Gender:</label>
                    <select onChange={e=>setEnteredGender(e.target.value)}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select> */}
                </div>
                </div>
                    <button type="submit">Submit</button>
            </form>
        </div>
        <SecurityPage/>
        </>
    )
}

export default SettingsPage;