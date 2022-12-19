import { useContext } from 'react';
import styles from  './AccountInfoContainer.module.css';
import AccountContext from '../../../../Context/account-ctx';

const AccountInfoContainer = () =>{

  const account_ctx = useContext(AccountContext);

    return(
        <ul>
          <li>
            <div className={styles.Text}>
              <strong>First and Last Name:</strong>
              <span>
                {account_ctx.userData.firstName} {account_ctx.userData.lastName}
              </span>
            </div>
          </li>
          <li>
            <div className={styles.Text}>
              <strong>E-mail:</strong>
              <span>{account_ctx.userData.email}</span>
            </div>
          </li>
          <li>
            <div className={styles.Text}>
              <strong>Birth Day:</strong>
              <span>{account_ctx.userData.birthDate}</span>
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
              <span>{account_ctx.userData.gender}</span>
            </div>
          </li>
        </ul>
    )
}

export default AccountInfoContainer;