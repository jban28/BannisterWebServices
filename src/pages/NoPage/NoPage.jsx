import Button from "../../components/Button/Button.jsx";
import { Link } from "react-router-dom";
import "./NoPage.css";

const NoPage = () => {
  return (
    <div className="no-page__container">
      <div className="no-page__msg">
        <h1>Error 404</h1>
        <p>
          Page not found on this server. Please check the URL and start again
        </p>
        <Button as={Link} to="/">
          Return to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NoPage;
