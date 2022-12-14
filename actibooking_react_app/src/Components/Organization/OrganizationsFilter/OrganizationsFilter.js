import OrganizationFilterPostDataHandler from "../../FetchMethods/PostMethods/OrganizationFilterPostDataHandler";
import styles from "./OrganizationsFilter.module.css";

const OrganizationsFilter = () => {

    const getCategorySelectData = (select) =>{
        let category = select.value;
        OrganizationFilterPostDataHandler(`https://localhost:7127/api/Organizations/${category}`, )
    }



    return (
        <div className={styles.mainContainer}>
            <div className={styles.selectContainer}>
                <label className={styles.selectLabel}>Category</label>
                <select className={styles.selectInput} onChange={() =>getCategorySelectData(this)}>
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