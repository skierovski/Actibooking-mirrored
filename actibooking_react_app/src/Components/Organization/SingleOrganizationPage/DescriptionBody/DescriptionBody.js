import styles from "./DescriptionBody.module.css";
import parse from "html-react-parser";

const DescriptionBody = (props) => {
  const organizationDescription = props.organizationDescription;
  const description = parse(organizationDescription);
  return (
    <div className={styles.descriptionContainer}>
        {description}
    </div>
  );
};

export default DescriptionBody;
