import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppRouter from "./routes/app.routes"; // Importe o seu AppRouter

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </Router>
  );
};

export default App;
