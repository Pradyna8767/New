import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";








const App = () => {
  return (
    <Router>
        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/aboutpage" element={<About/>} />
            <Route path="/coursespage" element={<Courses/>} />
            <Route path="/contactpage" element={<Contact/>} />
            <Route path="/admissionpage" element={<Admission/>} />
            <Route path="/aboutpage" element={<About/>} />
          </Routes>
        </Router>
  )
}

export default App 