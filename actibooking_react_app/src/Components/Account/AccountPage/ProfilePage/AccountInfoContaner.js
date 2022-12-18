import styles from  './AccountInfoContainer.module.css'

const AccountInfoContainer = (props) =>{
    return(
        <ul>
          <li>
            <div className={styles.Text}>
              <strong>First and Last Name:</strong>
              <span>
                {props.data.firstName} {props.data.lastName}
              </span>
            </div>
          </li>
          <li>
            <div className={styles.Text}>
              <strong>E-mail:</strong>
              <span>{props.data.email}</span>
            </div>
          </li>
          <li>
            <div className={styles.Text}>
              <strong>Birth Day:</strong>
              <span>{props.data.birthDate}</span>
            </div>
          </li>
          <li>
            <div className={styles.Text}>
              <strong>Adress:</strong>
              <span>Pomorska 13b/7 Gdańsk 80-344</span>
            </div>
          </li>
          <li>
            <div className={styles.Text}>
              <strong>Gender:</strong>
              <span>{props.data.gender}</span>
            </div>
          </li>
        </ul>
    )
}

export default AccountInfoContainer;