import React from "react";
import { Link } from "react-router-dom";
import './headers,css'

const Headers = () => {
    return(
        <header id="h2">
            <nav>
                <h3 id="h3">Vivekanand College</h3>
                <Link to='/homepage'>Home</Link>
                <Link to='/aboutpage'>About</Link>
                <Link to='/coursespage'>Courses</Link>
                <Limk to='/contactpage'>Contact</Limk>
                <Link to='/admissionPage'>Admission</Link>
            </nav>
        </header>
    )
}
export default Headers;

