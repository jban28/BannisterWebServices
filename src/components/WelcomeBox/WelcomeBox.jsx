import "./WelcomeBox.css";
import { useState, useEffect } from "react";

const WelcomeBox = () => {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    document.fonts.load("12px Roboto Mono").then(() => setFontReady(true));
  }, []);

  return (
    <div className="welcome-box__container">
      {fontReady && (
        <h1 className="welcome-box__message">
          Welcome to
          <br />
          <span className="welcome-box__message--highlight">Bannister</span>
          <br />
          <span className="welcome-box__message--highlight">Web</span>
          <br />
          <span className="welcome-box__message--highlight">Services</span>
          <br />
          .co.uk
        </h1>
      )}
    </div>
  );
};

export default WelcomeBox;
