import React from 'react';
import './AdmissionPage.css'

const AdmissionPage = () => {
    return (
      <div>
        <h2 id='h1'>Admissions at Vivekanand College</h2><br />
        <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p><br />
        <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p><br />

        <h2 id='h2'>Eligibility Criteria for Undergraduate Programs</h2><hr/><br />

        <table>
          <tr id='tr'>
            <td>Program</td> <td>Minimum Qualification</td> <td>Required Subjects</td> <td>Minimum Marks (%)</td>
          </tr>

          <tr id='tr'>
            <td>B.Sc. Computer Science</td> <td>10+2 (or equivalent)</td> <td>	Physics, Chemistry, Maths</td> <td>50%</td>
          </tr>

          <tr id='tr'>
            <td>B.Com. Accounting & Finance</td> <td>10+2 (or equivalent)</td> <td>Commerce Stream</td> <td>45%</td>
          </tr>

          <tr id='tr'>
            <td>B.A. English Literature</td> <td>10+2 (or equivalent)</td> <td>	Any Stream</td> <td>40%</td>
          </tr>
        </table>

        <h2>Application Process</h2><hr /><br />
        <li>
          <ol><b>Online Application:</b>Fill out the application form available on our portal.</ol>
          <ol><b>Document Submission:</b>Upload scanned copies of required documents (mark sheets, ID proof, etc.).</ol>
          <ol><b>Entrance Exam (if applicable):</b>Appear for the college's entrance examination.</ol>
          <ol><b>Merit List & Interview:</b> Check the merit list and attend the interview if shortlisted.</ol>
          <ol><b>Fee Payment:</b> Complete the admission by paying the required fees.</ol>
        </li>

        <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <a href="/CoursesPage">Courses page</a> or <a href="/ContactPage">Contact us</a> directly.</p>

      </div>
    );
};

export default AdmissionPage;