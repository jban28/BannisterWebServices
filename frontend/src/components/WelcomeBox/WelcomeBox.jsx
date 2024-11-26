import "./WelcomeBox.css";
import { useState, useEffect } from "react";

const WelcomeBox = () => {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontReady(true);
    });
  }, []);

  return (
    <div className="welcome-box__container">
      <h1 className="welcome-box__message">
        {fontReady ? "Welcome to" : "\u200b"}
        <br />
        <span
          className={
            (fontReady ? "show" : "wait") + " welcome-box__message--highlight"
          }
        >
          Bannister
        </span>
        <br />
        <span
          className={
            (fontReady ? "show" : "wait") + " welcome-box__message--highlight"
          }
        >
          Web
        </span>
        <br />
        <span
          className={
            (fontReady ? "show" : "wait") + " welcome-box__message--highlight"
          }
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
