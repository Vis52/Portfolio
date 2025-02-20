import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <h2>Vishal Sharma</h2>
        </div>
        <div className='list'>
            <ul>
                <a href='/Home'><li>Home</li></a>
                <a href='/About'><li>About</li></a>
                <a href='/Education'><li>Education</li></a>
                <a href='/Experience'><li>Experience</li></a>
                <a href='/Projects'><li>Projects</li></a>
               <a href='/Skills'> <li>Skills</li></a>
                <a href='/contact'><li>Contact</li></a>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
