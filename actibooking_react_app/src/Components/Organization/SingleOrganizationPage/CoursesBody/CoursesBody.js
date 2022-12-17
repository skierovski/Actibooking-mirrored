import styles from "./CorsesBody.module.css";

const CorsesBody = (props) => {
  const organizationCourses = props.organizationCourses;
  return <div className={styles.coursesContainer}>eqweqwe{organizationCourses}</div>;
};

export default CorsesBody;
