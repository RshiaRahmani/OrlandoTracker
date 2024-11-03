import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./assets/components/navbar";
import Inventory from "./assets/components/Inventory";
import Indeed from "./assets/components/indeed";
import Event from "./assets/components/event";
import Home from "./assets/components/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen flex flex-col">
        <Nav />
        <div className="flex-grow " >
          <Routes>
          
          <Route path="Asccinomads/" element={<Home />} />
          
        <Route  path="Asccinomads/inventory" element={<Inventory />} />
        <Route path="Asccinomads/events" element={<Event />} />
        <Route path="Asccinomads/indeed" element={<Indeed />} />
        <Route path="*" element={<Navigate to="/Asccinomads/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
