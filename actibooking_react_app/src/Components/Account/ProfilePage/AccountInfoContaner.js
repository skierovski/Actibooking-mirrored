import { useContext } from 'react';
import styles from  './AccountInfoContainer.module.css';
import AccountContext from '../../../Context/account-ctx';

const AccountInfoContainer = () =>{

  const account_ctx = useContext(AccountContext);

    return(
        <ul className={styles.infoList}>
          <li>
            <div className={styles.Text}>
              <strong>First and Last Name:</strong>
              <span>
                {account_ctx.userData.firstName} {account_ctx.userData.lastName}
              </span>
            </div>
          </li>
          <hr/>
          <li>
            <div className={styles.Text}>
              <strong>E-mail:</strong>
              <span>{account_ctx.userData.email}</span>
            </div>
          </li>
          <hr/>
          <li>
            <div className={styles.Text}>
              <strong>Birth Day:</strong>
              <span>{account_ctx.userData.birthDate}</span>
            </div>
          </li>
          <hr/>
          <li>
            <div className={styles.Text}>
              <strong>Adress:</strong>
              <span>{account_ctx.userData.adresses}</span>
            </div>
          </li>
          <hr/>
          <li>
            <div className={styles.Text}>
              <strong>Gender:</strong>
              <span>{account_ctx.userData.gender}</span>
            </div>
          </li>
        </ul>
    )
}

export default AccountInfoContainer;