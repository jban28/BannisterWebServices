import Navigation from "../../components/Navigation/Navigation.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Outlet } from 'react-router-dom';

function MainLayout () {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', height: 0 }}>
            <Navigation />
            <div style={{ flexGrow: 1 }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;