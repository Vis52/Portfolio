import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className=' container-fluid navbar'>
        <div className=' container-fluid logo'>
            <h2 className='container-fluid'>Vishal Sharma</h2>
        </div>
        <div className='container-fluid list'>
            <ul className='container-fluid'>
                <a className='container-fluid' href='/Home'><li>Home</li></a>
                <a className='container-fluid' href='/About'><li>About</li></a>
                <a className='container-fluid' href='/Education'><li>Education</li></a>
                <a className='container-fluid' href='/Experience'><li>Experience</li></a>
                <a className='container-fluid' href='/Project'><li>Project</li></a>
               <a className='container-fluid' href='/Skills'> <li>Skills</li></a>
                <a className='container-fluid' href='/contact'><li>Contact</li></a>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
