import styles from './DescriptionBody.module.css'

const DescriptionBody = (props) => {
    const organizationDescription = props.organizationDescription;
        return (
            <div className={styles.descriptionContainer}>
                {organizationDescription}
             </div>
        )
}

export default DescriptionBody;