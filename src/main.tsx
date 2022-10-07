import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/root";
import "./index.css";
import Router from "./Components/router";
import Route from "./Components/route";
import About from "./pages/about";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
);
