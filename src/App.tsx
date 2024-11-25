import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./assets/components/navbar";
import Home from "./assets/components/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen flex flex-col">
        <Nav />
        <div className="flex-grow" >
          <Routes>
          
          <Route path="/" element={<Home />} />
          
        <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
