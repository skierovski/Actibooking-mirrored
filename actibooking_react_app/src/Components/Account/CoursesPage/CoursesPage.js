import { useContext } from 'react';
import styles from './CoursesPage.module.css';
import AccountContext from '../../../Context/account-ctx';

const CoursesPage = () =>{
    const account_ctx = useContext(AccountContext);
    return(
        <>
            {account_ctx.userData.participants.map((o) =>(
                <div key={o.CourseId} className={styles.CourseTab}>
                    <span >{o.name}</span>
                    <span>{o.dayofweek}</span>
                    <span>{o.date}</span>
                    <span>{o.hour}</span>
                    <button className={styles.CancelButton}>Cancel</button>
                </div>

            ))}
        </>
    )
}
export default CoursesPage;