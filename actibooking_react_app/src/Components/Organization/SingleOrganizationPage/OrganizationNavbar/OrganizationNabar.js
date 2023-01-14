import styles from "./OrganizationNavbar.module.css";

const OrganizationNavbar = (props) => {
  return (
    <div className={styles.OrganizationNavbar}>
      <div
        className={styles.listItem}
        onClick={() => {
          props.changeContainer("courses");
        }}
      >
        Courses
      </div>
      <div
        className={styles.listItem}
        onClick={() => {
          props.changeContainer("adress");
        }}
      >
        Location
      </div>
      <div
        className={styles.listItem}
        onClick={() => {
          props.changeContainer("description");
        }}
      >
        Description
      </div>
      <div
        className={styles.listItem}
        onClick={() => {
          props.changeContainer("trainers");
        }}
      >
        Trainers
      </div>
      <div
        className={styles.listItem}
        onClick={() => {
          props.changeContainer("gallery");
        }}
      >
        Gallery
      </div>
    </div>
  );
};

export default OrganizationNavbar;
