import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ScrollToTop from "./Components/ScrollToTop";
import AppRouter from "./routes/app.routes"; // Importe o seu AppRouter

const App = () => {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </Router>
  );
};

export default App;
