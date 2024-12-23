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

Amplify.configure(outputs);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<BlogHome />}>
          <Route path=":postId" element={<BlogPost />} />
        </Route>
        <Route path="*" element={<NoPage />} />
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
