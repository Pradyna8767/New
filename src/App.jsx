import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Headers from "./Components/Headers/Headers";

// import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import AdmissionPage from './pages/AdmissionPage';
import NotFoundPage from './pages/NotFoundPage';




const App = () => {
  return (
    <Router>
        
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/aboutpage" element={<AboutPage />} />
            <Route path="/coursespage" element={<CoursesPage />} />
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/admissionpage" element={ <AdmissionPage/>}/>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
  )
}

export default App 