import styles from './TrainersBody.module.css'

const TrainersBody = (props) => {
    const organizationTrainers = props.organizationTrainers;
        return (
            <div className={styles.trainersContainer}>
                {organizationTrainers.map(trainer => <div>{trainer}</div>)}
             </div>
        )
}

export default TrainersBody;