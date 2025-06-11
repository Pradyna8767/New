import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionPage from "./pages/AdmissionPage";
import Home from "./pages/Home";






const App = () => {
  return (
    <Router>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutpage" element={<AboutPage/>} />
            <Route path="/coursespage" element={<CoursesPage/>} />
            <Route path="/contactpage" element={<ContactPage/>} />
            <Route path="/admissionpage" element={<AdmissionPage/>} />
            <Route path="/aboutpage" element={<AboutPage/>} />
          </Routes>
        </Router>
  )
}

export default App 