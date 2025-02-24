import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className=' container-fluid exp'>
        <div className='container-fluid item1'>
            <h1>Buds N Tech It Solution</h1>
            <h3>January 2025 - Present</h3>
            <h5>Frontend Developer Intern</h5>
            <ul>
                <li>I contributed to developing responsive web pages using HTML, CSS, and JavaScript, React, Bootstrap.</li>
                {/* <li> I collaborated with the team to enhance user interfaces and optimize web performance.</li> */}
            </ul>

        </div>
      <div className='container-fluid item2'>
        <h1>UNIC Software</h1>  
        <h3>July 2024 - August 2024</h3>
        <h5>Training</h5>
        <ul>
            <li>During Training worked on an ML-based model under the guidance of senior mentors, contributing to the <br/>development and optimization of cutting-edge solutions for the company.</li>
        </ul>
            
        </div><div className='container-fluid item3'>
            <h1>Fibcom India Ltd.</h1>
            <h3>July 2023 - August 2023</h3>
            <h5>Training</h5>
            <ul>
                <li> During training i had gained knowledge about the manufacturing of Demux and mux and telecommunication device</li>
            </ul>
            </div>
            {/* <div className='item4'>
                <h1>30 days Coding</h1>
                <h3>Course </h3>
                <h5>MERN Stack</h5>
                <ul>
                    <li>During this </li>
                </ul>
            
        </div> */}
    </div>
  )
}

export default Experience;
