import React from 'react';
import './Home.css';
import code from '../utils/code.webp';


const Home = () => {
  return (<div className='vc'>
    <div className='vc-left'>
        <h1>Hey,<br/>
        I'm Vishal Sharma<br/>
        Frontend Developer</h1>
        <h4>I'm a passionate web enthusiast constantly exploring <br/>
        the latest trends and technologies. Driven by a love for<br/>
     building innovative and user-centric digital experiences.</h4>
     <button className='b1'>Hire Me</button>
     <button className='b2'>Get In Touch</button>
      
    </div>
    <div className='vc-right'>
        <img src={code} alt=''/>
    </div>
   
</div>

  )
}

export default Home
