import React from 'react';
import './Education.css';
import dcrust1 from '../utils/dcrust1.jpg';
import pusa from '../utils/pusa.png';
import svm from '../utils/svm.jpeg';

const Education = () => {
  return (
    <div class="container-fluid card-container">
    <div class="container-fluid card">
      <img src={dcrust1} alt="Card Image" class="container-fluid card-img"/>
      <div class="container-fluid card-content">
        <h3>Bachelor's Technology in Computer Science Engineering
        
        </h3>
        <h2>August 2022 - Present</h2>

        <h5>CGPA - 7.9 Till 6th semester </h5>
      </div>
    </div>
    <div class="container-fluid card2">
      <img src={pusa} alt="Card Image" class="container-fluid card-img2"/>
      <div class="container-fluid card-content2">
        <h3>Diploma in Mechanical<br/>
         Engineering</h3>
         <h2>August 2019 - June 2022</h2>

<h5>Percentage - 84.5% </h5>
      </div>
    </div>
    <div class="container-fluid card3">
      <img src={svm} alt="Card Image" class="container-fluid card-img3"/>
      <div class="container-fluid card-content3">
        <h3>High School</h3>
        <h2>Completed in 2018</h2>

        <h5>Percentage - 74% </h5>
      </div>
    </div>
    
  </div>
  
  )
}

export default Education;
