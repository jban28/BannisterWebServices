import styles from "./WelcomeBox.module.css";
import { useState, useEffect } from "react";

const WelcomeBox = () => {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontReady(true);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.message}>
        {fontReady ? "Welcome to" : "\u200b"}
        <br />
        <span
          className={`
            ${fontReady ? styles.show : styles.wait} ${styles.messageHighlight}
          `}
        >
          Bannister
        </span>
        <br />
        <span
          className={`
            ${fontReady ? styles.show : styles.wait} ${styles.messageHighlight}
          `}
        >
          Web
        </span>
        <br />
        <span
          className={`
            ${fontReady ? styles.show : styles.wait} ${styles.messageHighlight}
          `}
        >
          Services
        </span>
        <br />
        {fontReady ? ".co.uk" : "\u200b"}
      </h1>
    </div>
  );
};

export default WelcomeBox;
