import styles from "./BrandIcon.module.css";

const BrandIcon = ({ id, label }) => {
  return (
    <i className={`${styles.icon} fa-brands fa-${id}`}>
      <span className={styles.tooltip}>{label}</span>
    </i>
  );
};

export default BrandIcon;
