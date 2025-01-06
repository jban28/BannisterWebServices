import styles from "./Button.module.css";

const Button = ({ children, as, ...restProps }) => {
  const Component = as ?? "button";
  return (
    <Component {...restProps} className={styles.button}>
      {children}
    </Component>
  );
};

export default Button;
