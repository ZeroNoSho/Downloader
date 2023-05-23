import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Youtube from "./page/youtube";
import Instagram from "./page/instagram";
import Tiktok from "./page/tiktok";

function App() {
  return (
    <Router>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <h2 className="title is-4" style={{ color: "hsl(171, 100%, 41%)" }}>
              Downloader
            </h2>
          </a>
        </div>
      </nav>
      <div className="dis">
        <div className="werwerw">
          <Link to={"/"}>
            <i className="fa-brands fa-youtube calorlike"></i>
          </Link>
        </div>
        <div className="werwerw">
          <Link to={"/tiktok"}>
            <i className="fa-brands fa-tiktok calorlike"></i>
          </Link>
        </div>
        <div className="werwerw">
          <Link to={"/instagram"}>
            <i className="fa-brands fa-instagram calorlike"></i>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Youtube />}></Route>
        <Route path="/instagram" element={<Instagram />}></Route>
        <Route path="/tiktok" element={<Tiktok />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
