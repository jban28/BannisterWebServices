// CSS import order matters - want to apply custom css and component css after bs css
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import NoPage from "./pages/NoPage/NoPage.jsx";
import BlogPost from "./pages/BlogPost/BlogPost.jsx";
import BlogHome from "./pages/BlogHome/BlogHome.jsx";
import { Amplify } from "aws-amplify";
import outputs from "/amplify_outputs.json";
import MainLayout from "./layouts/MainLayout/MainLayout.jsx";
import HomeLayout from "./layouts/HomeLayout/HomeLayout.jsx";

Amplify.configure(outputs);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index path="/" element={<Home />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<BlogHome />} />
          <Route path="blog/:postId" element={<BlogPost />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
