import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sponsers from "./Components/Sponsers";
import "leaflet/dist/leaflet.css";
import Home from "./page/Home";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsor" element={<Sponsers />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
