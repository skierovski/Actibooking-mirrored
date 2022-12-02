import styles from './CoursesPage.module.css'

const CoursesPage = (props) =>{
    return(
        <>
            {props.data.participants.map((o, key) =>(
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