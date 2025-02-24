import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Contact.css';

const Contact = () => {
  return (
    <div className=' container-fluid bo'>
    <div className=' container-fluid contact-info'>
        <h1> Contact Us</h1><br/>
        <div className=' container-fluid contact-container'>
        
                
           <a href='6398730468' className=' container-fluid icon-link '> <i class=" container-fluid bi bi-telephone-forward"> </i>    +91-6398730468</a>
           {/* <a href='vs6773817@gmail.com' className=' container-fluid icon-link'> <i class="container-fluid bi bi-envelope-at"></i> vs6773817@gmail.com </a> */}
           <a href='https://www.linkedin.com/in/vishal-sharma-708833228/' className='container-fluid icon-link'> <i class="container-fluid bi bi-linkedin"></i>       Vishal Sharma</a>
            <a href='https://github.com/Vis52/' className=' container-fluid icon-link'><i class="container-fluid bi bi-github"></i>  Vishal Sharma</a>
            <a href='http://instagram.com/vishal_sharma_0002/' className='container-fluid icon-link'><i class="container-fluid bi bi-instagram"></i>   Vishal Sharma</a>
            

       
        </div>
      
    </div>
    </div>
  )
}

export default Contact;