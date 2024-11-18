import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
// import About from "./pages/About";
import NoPage from "./pages/NoPage.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          {/*<Route path="about" element={<About />} />*/}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);