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
          
          <Route path="/" element={<Home />} />
          
        <Route  path="/inventory" element={<Inventory />} />
        <Route path="/events" element={<Event />} />
        <Route path="/indeed" element={<Indeed />} />
        <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        {/* <footer className="w-full  text-center md:px-10 px-2 items-center justify-center flex mt-10">
          <p className="bg-zinc-900 items-center justify-center flex w-full h-12 rounded-t-xl">
            Developed By
            <a
              href="https://t.me/Sachima"
              target="_blank"
              className="text-orange-400 mx-1 underline hover:drop-shadow hover:text-orange-500 transition all-ease-in"
            >
              Arshia
            </a>{" "}
            - September 2024 ©
          </p>
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
