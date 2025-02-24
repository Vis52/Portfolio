import React from 'react';
import './Skills.css';
import sql from '../utils/sql.png';
import html from '../utils/html.png';
import css from '../utils/css.png';
import cpp from '../utils/cpp.png';
import js from '../utils/js.jpeg';
import react from '../utils/react.png';
import bootstrap from '../utils/bootstrap.png';
import node from '../utils/node.png';
import git from '../utils/git.png';
import github from '../utils/github.png';


const Skills = () => {
  return (
    <div className='container-fluid main'>
        <div className='container-fluid main1'>
            <img src={html} alt=''className='container-fluid'/>
            <img src={css} alt=''className='container-fluid'/>
            <img src={js} alt=''className='container-fluid'/>
            <img src={cpp} alt=''className='container-fluid'/>
        </div>
        <div className='container-fluid main2'>
        <img src={react} alt=''className='container-fluid'/>
         <img src={bootstrap} alt=''className='container-fluid'/>
          <img src={node} alt=''className='container-fluid'/>
        </div>
        <div className='container-fluid main3'>
        <img src={git} alt=''className='container-fluid'/>
        <img src={github} alt=''className='container-fluid'/>
        </div>
      
    </div>
  )
}

export default Skills;
