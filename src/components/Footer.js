import React from 'react'
import './Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

const Footer = () => {
  return (
    <div className=' container-fluid footer'>
        <div className='footer-left'>
            <h2>@Vishal Sharma-2025</h2>

        </div>
        <div className='footer-right'>
    
           <a href='https://x.com/ErVishalSharma6' className='icon-link'> <i class="bi bi-twitter-x"></i></a>
           <a href='https://www.linkedin.com/in/vishal-sharma-708833228/' className='icon-link'> <i class="bi bi-linkedin"></i></a>
            <a href='https://github.com/Vis52/' className='icon-link'><i class="bi bi-github"></i> </a>
            <a href='http://instagram.com/vishal_sharma_0002/' className='icon-link'><i class="bi bi-instagram"></i></a>
            


        </div>
      
    </div>
  )
}

export default Footer
