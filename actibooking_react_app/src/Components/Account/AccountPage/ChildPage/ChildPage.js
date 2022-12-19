import { useContext } from "react";
import styles from "./ChildPage.module.css";
import AccountContext from "../../../../Context/account-ctx";

const ChildPage = () => {
  const account_ctx = useContext(AccountContext);
  return (
    <div className={styles.Container}>
      {account_ctx.userData.children.map((o) => (
        <div key={o.id}>
          <p>
            {o.name} {o.lastName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChildPage;
