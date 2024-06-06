// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "../public/App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
