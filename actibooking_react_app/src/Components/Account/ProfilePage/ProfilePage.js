import React, { useContext } from "react";
import styles from "./ProfilePage.module.css";
import AccountInfoContainer from "./AccountInfoContaner";
import AccountContext from "../../../Context/account-ctx";
import AddChildModal from "../AccountPageModals/AddChildModal/AddChildModal";
import SignUpPostDataHandler from "../../FetchMethods/PostMethods/SignUpPostDataHandler";
import OrganizationInfoContainer from "./OrganizationInfoContainer";
import Button from "../../DefaultModels/Buttons/Button";
import { Link } from "react-router-dom";
const ProfilePage = () => {
  const account_ctx = useContext(AccountContext);
  const children = account_ctx.userData.children
    ? account_ctx.userData.children
    : null;
  const isTrainer = account_ctx.userData.isTrainer;

  const onSubmitTrainer = () => {
    SignUpPostDataHandler(
      `https://localhost:7127/api/Trainers/${account_ctx.userData.id}`
    );
    account_ctx.setBody({ isTrainerPage: true });
  };

  return (
    <>
      {account_ctx.addChildModal && (
        <AddChildModal close={() => account_ctx.setAddChildModal(false)} />
      )}
      <div className={styles.Information}>
        <AccountInfoContainer />
      </div>
      <div className={styles.TrainerChilds}>
        <div className={styles.Childs}>
          {children ? (
            <>
              {children.map((o) => (
                <div key={o.name}>
                  {o.name} {o.lastName}
                </div>
              ))}
              <button
                className={styles.ProfileButton}
                onClick={() => account_ctx.setAddChildModal(true)}
                value="Add child"
              >
                Add Child
              </button>
            </>
          ) : (
            <>
              <div>No added childs yet</div>
              <button
                className={styles.ProfileButton}
                onClick={() => account_ctx.setAddChildModal(true)}
                value="Add child"
              >
                Add Child
              </button>
            </>
          )}
        </div>
        <div className={styles.Trainer}>
          <div className={styles.Test}>
        <span>Edit Your organization</span>
          <Link
            className={styles.ProfileButton}
            to="/Edit/Organization/6"
            value="Edit"
          >
            Edit
          </Link>
          </div>
          
          {isTrainer ? (
            <div>
            <button
              className={styles.ProfileButton}
              onClick={() => account_ctx.setBody({ isTrainerPage: true })}
              value="Trainer Tab"
            >
              Trainer Tab
            </button></div>
          ) : (
            <>
              <span>Become Trainer in Actibooking</span>
              <button
                className={styles.ProfileButton}
                onClick={onSubmitTrainer}
                value="Active trainer"
              >
                Active trainer
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
