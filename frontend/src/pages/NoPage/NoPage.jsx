import Button from "react-bootstrap/Button";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./NoPage.css";

const NoPage = () => {
  return (
    <div className="no-page">
      <Navigation />
      <div className="no-page__container">
        <div className="no-page__msg">
          <h1>Error 404</h1>
          <p>
            Page not found on this server. Please check the URL and start again
          </p>
          <Button href="/">Return to Homepage</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoPage;
