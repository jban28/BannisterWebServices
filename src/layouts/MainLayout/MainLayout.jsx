import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        height: "min-content",
      }}
    >
      <Navigation />
      <div style={{ flex: "1 0 0" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
