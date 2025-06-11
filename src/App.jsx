import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import CoursesPage from './pages/CoursesPage';
import ContactPage from './pages/ContactPage';
import AdmissionPage from './pages/AdmissionPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from "./pages/HomePage";
import AboutPage from "./Pages/AboutPage";




const App = () => {
  return (
    <Router>
        
          <Routes>
             <Route path="/" element={<HomePage/>} /> 
           
          </Routes>
        </Router>
  )
}

export default App 