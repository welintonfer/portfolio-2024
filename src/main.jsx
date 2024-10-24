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



import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactGA from "react-ga4";

// Inicializa o Google Analytics se não for seu IP
async function initializeAnalytics() {
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    const userIP = data.ip;

    const blockedIPs = ["189.18.207.112", "2001:4860:7:303::a0"]; // Seus IPs

    if (!blockedIPs.includes(userIP)) {
      ReactGA.initialize("G-T26QG4V20E");
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        anonymizeIp: true, // Anonimiza mesmo para outros usuários
      });
      console.log("Google Analytics inicializado.");
    } else {
      console.log("Rastreamento bloqueado para o seu IP.");
    }
  } catch (error) {
    console.error("Erro ao buscar o IP do usuário:", error);
  }
}

function Main() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

