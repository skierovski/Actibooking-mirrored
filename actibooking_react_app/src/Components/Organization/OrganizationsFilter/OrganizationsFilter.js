import styles from "./OrganizationsFilter.module.css";

const OrganizationsFilter = () => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.selectContainer}>
                <label className={styles.selectLabel}>Category</label>
                <select className={styles.selectInput}>
                    <option value="all">All</option>
                    <option value="swimming">Swimming</option>
                    <option value="football">Football</option>
                    <option value="aerobic">Aerobic</option>
                </select>
            </div>
            <div className={styles.selectContainer}>
                <label className={styles.selectLabel}>Year range</label>
                <select className={styles.selectInput}>
                    <option value="all">All</option>
                    <option value="0-3">0-3</option>
                    <option value="3-9">3-9</option>
                    <option value="9-15">9-15</option>
                    <option value="15-18">15-18</option>
                    <option value="18+">18+</option>
                </select>
            </div>
        </div>
    )
}

export default OrganizationsFilter;