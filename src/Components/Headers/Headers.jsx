import React from 'react';
import {Link} from 'react-router-dom';
import './Headers.css'

const Headers = () => {
    return (
        <header id='h2'>
            <nav>
                <h3 id='h3'>Vivekanand College</h3>
                <Link to='/homepage'> Home </Link>
                <Link to='/aboutpage'> About </Link> 
                <Link to='/coursespage'> Courses </Link>
                <Link to='/contactpage'> Contact </Link>
                <Link to='/admissionpage'>Apply Now!</Link>
            </nav>
        </header>
    )
}

export default Headers;

