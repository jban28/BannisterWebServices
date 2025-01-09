import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="/">
        <img
          alt="Bannister Web Services Logo"
          height="100px"
          src="/brand/logo.svg"
        />
      </a>
    </div>
  );
};

export default Footer;
