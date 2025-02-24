import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className=' container-fluid navbar'>
        <div className=' container-fluid logo'>
            <h2>Vishal Sharma</h2>
        </div>
        <div className='container-fluid list'>
            <ul>
                <a href='/Home'><li>Home</li></a>
                <a href='/About'><li>About</li></a>
                <a href='/Education'><li>Education</li></a>
                <a href='/Experience'><li>Experience</li></a>
                <a href='/Project'><li>Project</li></a>
               <a href='/Skills'> <li>Skills</li></a>
                <a href='/contact'><li>Contact</li></a>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
