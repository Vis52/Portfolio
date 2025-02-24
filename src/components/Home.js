import React from 'react';
import './Home.css';
import code from '../utils/code.webp';


const Home = () => {
  return (<div className=' container-fluid vc'>
    <div className='vc-left'>
        <h1>Hey,<br/>
        I'm Vishal Sharma<br/>
        Frontend Developer</h1>
        <h4>I'm a passionate web enthusiast constantly exploring <br/>
        the latest trends and technologies. Driven by a love for<br/>
     building innovative and user-centric digital experiences.</h4>
     <button className='b1' ><a href='https://portfolio-vishal-sh.netlify.app/Project'>See my projects</a></button>
     <button className='b2'><a href='https://portfolio-vishal-sh.netlify.app/contact'>Get In Touch</a></button>
      
    </div>
    <div className='vc-right'>
        <img src={code} alt=''/>
    </div>
   
</div>

  )
}

export default Home;
