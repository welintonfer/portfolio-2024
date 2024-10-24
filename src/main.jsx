// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// // npm i react-ga4 Google analytics
// import ReactGA from "react-ga4";

// ReactGA.initialize("G-T26QG4V20E");

// ReactGA.send({
//   hitType: "pageview",
//   page: window.location.pathname,
// });

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactGA from "react-ga4";

// Inicializar apenas se estiver em produção
if (process.env.NODE_ENV === "production") {
  ReactGA.initialize("G-T26QG4V20E");

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    anonymizeIp: true,
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
