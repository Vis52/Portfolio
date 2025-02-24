import React from 'react'
import './About.css'
import vishal from '../utils/vishal.png'
import code from '../utils/code.webp'


const Home = () => {
  return (
    <div className='container-fluid home-container'>
        
        <div className='container-fluid home-left'>
            
            <img src={vishal} alt='img'className='container-fluid'/>
            <h1>Vishal Sharma</h1>
            <h3>Student & Intern</h3>



        </div>
        <div className='container-fluid home-right'>
            <h1 className='h1'>FRONTEND <br/>
            
            DEVELOPER
            </h1>
            <h5>I'm a Passionate frontend developer skilled in HTML, CSS, and JavaScript, <br/>
            with a focus on creating intuitive, responsive user interfaces. Dedicated<br/>
             to building clean, efficient, and accessible web experiences.</h5>
             <div className='container-fluid suru'>
            <div className='container-fluid right-left'>
                
                <h4>
                Proficient in HTML, CSS, JavaScript, and React,Bootstrap, with a strong ability to build dynamic, responsive, and user-friendly web applications.
                </h4>
                <button  ><a href='https://portfolio-vishal-sh.netlify.app/Project'>See my projects</a></button>
     

            </div>
            <div className='container-fluid right-right'>
                <h4>Feel free to reach out for collaboration or inquiries. Let’s create something amazing together!</h4>
                <button ><a href='https://portfolio-vishal-sh.netlify.app/contact'>Get In Touch</a></button>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Home;
