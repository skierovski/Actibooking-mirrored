import styles from './TrainersBody.module.css'

const TrainersBody = (props) => {
    const organizationTrainers = props.organizationTrainers;
        return (
            <div className={styles.trainersContainer}>
                {/* {organizationTrainers.map(t => <div>{t.name}</div>)} */}
                trainers
             </div>
        )
}

export default TrainersBody;