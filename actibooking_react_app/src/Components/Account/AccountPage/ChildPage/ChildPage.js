import styles from "./ChildPage.module.css";

const ChildPage = (props) => {
  const children = props.data.children;
  return (
    <div className={styles.Container}>
      {children.map((o) => (
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